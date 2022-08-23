import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IGoodsData, ISetPayload } from '../../../../redux/goodsDataReducer'
import FormContainer from '../FormContainer/FormContainer'
import { NumberSelectionWrapper, SelectionHeader } from './SelectionMobile.styled'

interface NumberSelectionProps {
	goodData: IGoodsData
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const SelectionMobile = ({ goodData, setIsChoosedToogle, basket, addBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }: NumberSelectionProps) => {
	const initGoodData = goodData
	const [count, setCount] = useState<any>('1')
	const [value, setValue] = useState(goodData.value + ' м3')
	const [netto, setNetto] = useState(goodData.netto + ' кг')
	const [brutto, setBrutto] = useState(goodData.brutto + ' кг')
	const [cost, setCost] = useState(goodData.cost + ' руб')
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
	let isDisable
	if (count === '' || value === '' || netto === '' || brutto === '' || cost === '') isDisable = true
	return (
		<NumberSelectionWrapper>
			<SelectionHeader>
				<img src={goodData.img} alt="good's photo" />
				<p>{goodData.description}</p>
			</SelectionHeader>
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

export default SelectionMobile
