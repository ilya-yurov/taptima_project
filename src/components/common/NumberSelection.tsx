import styled from "@emotion/styled";
import {useRouter} from "next/router";
import {abort} from "process";
import {ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react";
import {IGoodsData} from "../../redux/goodsDataReducer";
import {clearLetters, isValidFieldCheck, setClear, setCorrectValue} from "../../utils/helpers";
import {Button} from "./Button";
import {ButtonSection, ButtonsWrapper, FormWrapper, NumberSelectionWrapper, NumberWrapper, SelectionHeader} from "./styles/NumberSelection.styled";



interface NumberSelectionProps {
	goodData: IGoodsData
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	addBasketElement: (newElement: IGoodsData) => ({type: string, payload: IGoodsData})
}

const NumberSelection = ({
	goodData, setIsChoosedToogle, basket,
	deleteBasketElement, addBasketElement}: NumberSelectionProps) => {

		console.log(JSON.stringify(basket, null, 2))

	const initGoodData = goodData
	const [count, setCount] = useState(1)
	const [value, setValue] = useState(goodData.value + ' м3')
	const [netto, setNetto] = useState(goodData.netto + ' кг')
	const [brutto, setBrutto] = useState(goodData.brutto + ' кг')
	const [cost, setCost] = useState(goodData.cost + ' руб')
	const router = useRouter()

	useEffect(() => {
		recalculateQuantity()
	}, [count])

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
	const onCostChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCost(e.target.value)
	}

	const recalculateQuantity = () => {
		setValue(initGoodData.value*count + ' м3')
		setNetto(initGoodData.netto*count + ' кг')
		setBrutto(initGoodData.brutto*count + ' кг')
		setCost(initGoodData.cost*count + ' руб')
	}

	const onReduce = () => {
		if (count !== 1) {
			setCount(count - 1)
		}
	}
	const onIncrease = () => {
		setCount(count + 1)
	}

	let onReset = (e: MouseEvent) => {
		e.preventDefault()
		setIsChoosedToogle(prev => !prev)
	}

	let handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		let basketMatch, curCount, curValue, curNetto, curBrutto, curCost
		if (basket.some((el => el.id === goodData.id))) {
			basketMatch = basket.find(el => el.id === goodData.id)
			curCount = basketMatch?.count + count
			curValue = parseInt(basketMatch?.value) + parseInt(clearLetters(value))
			curNetto = parseInt(basketMatch?.netto) + parseInt(clearLetters(netto))
			curBrutto = parseInt(basketMatch?.brutto) + parseInt(clearLetters(brutto))
			curCost = parseInt(basketMatch?.cost) + parseInt(clearLetters(cost))
			deleteBasketElement(basket.findIndex((el => el.id === goodData.id)))
			addBasketElement({
				id: goodData.id,
				img: goodData.img,
				description: goodData.description,
				count: curCount, netto: curNetto, brutto:curBrutto, cost: curCost, value:curValue
			})
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

		//! передаем выбранные пизиции в стор
	}

	return (
		<NumberSelectionWrapper>
			<SelectionHeader>
				<img src={goodData.img} alt="good's photo" />
				<p>{goodData.description}</p>
			</SelectionHeader>
			<NumberWrapper>
				<header>Кол-во:</header>
				<ButtonSection>
					<p>
						<button type='button' onClick={onReduce}>
							<img src="/minus_selection.svg" alt="minus" />
						</button>
					</p>
					<p>{count}</p>
					<p>
						<button type='button' onClick={onIncrease}>
							<img src="plus_selection.svg" alt="plus" />
						</button>
					</p>
				</ButtonSection>
			</NumberWrapper>
			<FormWrapper action="">
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
					value={cost}
					onChange={onCostChange}
				/>
				<ButtonsWrapper>
					<Button
						content={'Сбросить'}
						property='add'
						type='reset'
						onClick={onReset}
					/>
					<Button
						content={'Добавить'}
						property='add'
						type='submit'
						onClick={handleSubmit}
					/>
				</ButtonsWrapper>
			</FormWrapper>
		</NumberSelectionWrapper>);
};

export default NumberSelection
