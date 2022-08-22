import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IGoodsData, ISetPayload } from '../../../../redux/goodsDataReducer'
import { FormNotification } from '../../FormNotification/FormNotification'
import FormContainer from '../FormContainer/FormContainer'

import { ButtonSection, NumberSelectionWrapper, NumberWrapper, SelectionHeader } from './SelectionDesktop.styled'

interface NumberSelectionProps {
	goodData: IGoodsData
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	isChoosedToogle?: boolean
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const SelectionDesktop = ({
	goodData,
	setIsChoosedToogle,
	basket,
	isChoosedToogle,
	addBasketElement,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
}: NumberSelectionProps) => {
	const initGoodData = goodData
	const [count, setCount] = useState<any>('1')
	const [value, setValue] = useState(goodData.value + ' м3')
	const [netto, setNetto] = useState(goodData.netto + ' кг')
	const [brutto, setBrutto] = useState(goodData.brutto + ' кг')
	const [cost, setCost] = useState(goodData.cost + ' руб')
	const [note, setNote] = useState(true)
	const values = { count, value, netto, brutto, cost }
	const setters = { setNetto, setBrutto, setValue, setCount }
	useEffect(() => {
		recalculateQuantity()
	}, [count])

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
	let isDisable
	if (count === '' || value === '' || netto === '' || brutto === '' || cost === '') isDisable = true

	return (
		<NumberSelectionWrapper>
			{note && isChoosedToogle && <FormNotification content='Теперь заполните поля для этого элемента' property='complete form' onClick={() => setNote(false)} />}
			<SelectionHeader>
				<img src={goodData.img} alt="good's photo" />
				<p>{goodData.description}</p>
			</SelectionHeader>
			<NumberWrapper>
				<header>Кол-во:</header>
				<ButtonSection>
					<p>
						<button type='button' onClick={onReduce}>
							<img src='/other/minus_selection.svg' alt='minus' />
						</button>
					</p>
					<p>{count}</p>
					<p>
						<button type='button' onClick={onIncrease}>
							<img src='/other/plus_selection.svg' alt='plus' />
						</button>
					</p>
				</ButtonSection>
			</NumberWrapper>
			<FormContainer
				goodData={goodData}
				isDisable={isDisable}
				setters={setters}
				basket={basket}
				values={values}
				setCountGlobal={setCountGlobal}
				setNettoGlobal={setNettoGlobal}
				setBruttoGlobal={setBruttoGlobal}
				setValueGlobal={setValueGlobal}
				setIsChoosedToogle={setIsChoosedToogle}
				addBasketElement={addBasketElement}
			/>
		</NumberSelectionWrapper>
	)
}

export default SelectionDesktop
