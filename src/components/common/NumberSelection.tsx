import {useRouter} from "next/router";
import {ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react";
import {IGoodsData, ISetPayload} from "../../redux/goodsDataReducer";
import {clearLetters, setCorrectValue} from "../../utils/helpers";
import {Button} from "./Button";
import {FormNotification} from "./FormNotification";
import {ButtonSection, ButtonsWrapper, FormWrapper, NumberSelectionWrapper, NumberWrapper, SelectionHeader} from "./styles/NumberSelection.styled";

interface NumberSelectionProps {
	goodData: IGoodsData
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	mobile?: boolean
	isChoosedToogle?: boolean
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	addBasketElement: (newElement: IGoodsData) => ({type: string, payload: IGoodsData})
	setCountGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setNettoGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setBruttoGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setValueGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
}

const NumberSelection = ({
	goodData, setIsChoosedToogle, basket, isChoosedToogle,
	addBasketElement, mobile, setCountGlobal,
	setNettoGlobal, setBruttoGlobal, setValueGlobal}: NumberSelectionProps) => {

	const initGoodData = goodData
	const [count, setCount] = useState<any>('1')
	const [value, setValue] = useState(goodData.value + ' м3')
	const [netto, setNetto] = useState(goodData.netto + ' кг')
	const [brutto, setBrutto] = useState(goodData.brutto + ' кг')
	const [cost, setCost] = useState(goodData.cost + ' руб')
	const [note, setNote] = useState(true)
	const router = useRouter()

	useEffect(() => {
		recalculateQuantity()
	}, [count])

	const onCountChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0)
			setCount('')
		else
			setCount(value)
	}
	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'м3')
		setValue(value)
	}
	const onNettoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'кг')
		setNetto(value)
	}
	const onBruttoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'кг')
		setBrutto(value)
	}

	const recalculateQuantity = () => {
		setValue(initGoodData.value * count + ' м3')
		setNetto(initGoodData.netto * count + ' кг')
		setBrutto(initGoodData.brutto * count + ' кг')
	}

	const onReduce = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}
	const onIncrease = () => {
		setCount(Number(count) + 1)
	}

	const onReset = (e: MouseEvent) => {
		e.preventDefault()
		setIsChoosedToogle(prev => !prev)
	}

	const currentGoodElementIndex = basket.findIndex((el => el.id === goodData.id))
	const handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		let basketMatch
		if (basket.some((el => el.id === goodData.id))) {
			basketMatch = basket.find(el => el.id === goodData.id)
			setCountGlobal(currentGoodElementIndex, parseInt(basketMatch?.count) + parseInt(count))
			setNettoGlobal(currentGoodElementIndex, parseInt(basketMatch?.netto) + parseInt(netto))
			setBruttoGlobal(currentGoodElementIndex, parseInt(basketMatch?.brutto) + parseInt(brutto))
			setValueGlobal(currentGoodElementIndex, parseInt(basketMatch?.value) + parseInt(value))
			setIsChoosedToogle(prev => !prev)
			router.push({pathname: '/basket'})
		} else {
			addBasketElement({
				id: goodData.id,
				img: goodData.img,
				description: goodData.description,
				count,
				netto: parseInt(clearLetters(netto)),
				brutto: parseInt(clearLetters(brutto)),
				cost: parseInt(clearLetters(cost)),
				value: parseInt(clearLetters(value))
			})
			setIsChoosedToogle(prev => !prev)
			router.push({pathname: '/basket'})
		}
	}

	let isDisable
	if (count === '' || value === '' || netto === '' || brutto === '' || cost === '')
		isDisable = true

	return (
		<NumberSelectionWrapper>
			{note && isChoosedToogle && <FormNotification
				content="Теперь заполните поля для этого элемента"
				property="complete form"
				onClick={() => setNote(false)}
			/>}
			<SelectionHeader>
				<img src={goodData.img} alt="good's photo" />
				<p>{goodData.description}</p>
			</SelectionHeader>
			{!mobile && <NumberWrapper>
				<header>Кол-во:</header>
				<ButtonSection>
					<p>
						<button type='button' onClick={onReduce}>
							<img src="/other/minus_selection.svg" alt="minus" />
						</button>
					</p>
					<p>{count}</p>
					<p>
						<button type='button' onClick={onIncrease}>
							<img src="/other/plus_selection.svg" alt="plus" />
						</button>
					</p>
				</ButtonSection>
			</NumberWrapper>}
			<FormWrapper action="">
				{mobile &&
					<input
						name="count"
						id="value"
						type="text"
						placeholder={'Кол-во'}
						value={count}
						onChange={onCountChange}
					/>}
				<input
					name="value"
					id="value"
					type="text"
					placeholder={'Общий объем, м3'}
					value={value}
					onChange={onValueChange}
				/>
				<input
					name="netto"
					id="netto"
					type="text"
					placeholder={'Общая масса нетто, кг'}
					value={netto}
					onChange={onNettoChange}
				/>
				<input
					name="brutto"
					id="brutto"
					type="text"
					placeholder={'Общая масса брутто, кг'}
					value={brutto}
					onChange={onBruttoChange}
				/>
				<input
					name="cost"
					id="cost"
					type="text"
					disabled={true}
					placeholder={'Стоимость одной единицы'}
					value={goodData.cost + ' руб'}
				/>
				<ButtonsWrapper>
					<Button
						content={'Сбросить'}
						property='add'
						mobile={mobile}
						type='reset'
						onClick={onReset}
					/>
					<Button
						content={'Продолжить'}
						property='add'
						disabled={isDisable}
						type='submit'
						mobile={mobile}
						onClick={handleSubmit}
					/>
				</ButtonsWrapper>
			</FormWrapper>
		</NumberSelectionWrapper>);
};

export default NumberSelection
