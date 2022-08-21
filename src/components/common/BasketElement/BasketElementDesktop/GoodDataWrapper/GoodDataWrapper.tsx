import { MouseEvent, useState } from 'react'
import {IGoodsData, ISetPayload} from '../../../../../redux/goodsDataReducer'
import GoodDataInput from './GoodDataInput/GoodDataInput'
import { GoodBruttoWrapper, GoodCountWrapper, GoodNettoWrapper, GoodValueWrapper } from './GoodDataWrapper.styled'

interface GoodDataWrapperProps {
	currentBasketElement: IGoodsData
	currentGoodElementIndex: number
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const GoodDataWrapper = ({
	currentBasketElement,
	setCountGlobal,
	setNettoGlobal,
	currentGoodElementIndex,
	setBruttoGlobal,
	setValueGlobal,
}: GoodDataWrapperProps) => {
	const [count, setCount] = useState(currentBasketElement.count)
	const [netto, setNetto] = useState(currentBasketElement.netto)
	const [brutto, setBrutto] = useState(currentBasketElement.brutto)
	const [value, setValue] = useState(currentBasketElement.value)
	const [editCountMode, setEditCountMode] = useState(false)
	const [editNettoMode, setEditNettoMode] = useState(false)
	const [editBruttoMode, setEditBruttoMode] = useState(false)
	const [editValueMode, setEditValueMode] = useState(false)
	const seters = { setCount, setNetto, setBrutto, setValue }
	const onEditCountMode = (e: MouseEvent) => {
		setEditCountMode(true)
	}
	const onEditFalseCountMode = (e: MouseEvent) => {
		setEditCountMode(false)
		setCountGlobal(currentGoodElementIndex, count)
	}
	const onEditNettoMode = (e: MouseEvent) => {
		setEditNettoMode(true)
	}
	const onEditFalseNettoMode = (e: MouseEvent) => {
		setEditNettoMode(false)
		setNettoGlobal(currentGoodElementIndex, netto)
	}
	const onEditBruttoMode = (e: MouseEvent) => {
		setEditBruttoMode(true)
	}
	const onEditFalseBruttoMode = (e: MouseEvent) => {
		setEditBruttoMode(false)
		setBruttoGlobal(currentGoodElementIndex, brutto)
	}
	const onEditValueMode = (e: MouseEvent) => {
		setEditValueMode(true)
	}
	const onEditFalseValueMode = (e: MouseEvent) => {
		setEditValueMode(false)
		setValueGlobal(currentGoodElementIndex, value)
	}

	return (
		<>
			{!editCountMode && <GoodCountWrapper onClick={onEditCountMode}>{currentBasketElement.count}</GoodCountWrapper>}
			{!editNettoMode && <GoodNettoWrapper onClick={onEditNettoMode}>{currentBasketElement.netto}</GoodNettoWrapper>}
			{!editBruttoMode && <GoodBruttoWrapper onClick={onEditBruttoMode}>{currentBasketElement.brutto}</GoodBruttoWrapper>}
			{!editValueMode && <GoodValueWrapper onClick={onEditValueMode}>{currentBasketElement.value}</GoodValueWrapper>}
			{editCountMode && (
				<GoodCountWrapper onClick={onEditFalseCountMode}>
					<GoodDataInput name='count' value={count} seters={seters} />
				</GoodCountWrapper>
			)}
			{editNettoMode && (
				<GoodNettoWrapper onClick={onEditFalseNettoMode}>
					<GoodDataInput name='netto' value={netto} seters={seters} />
				</GoodNettoWrapper>
			)}
			{editBruttoMode && (
				<GoodBruttoWrapper onClick={onEditFalseBruttoMode}>
					<GoodDataInput name='brutto' value={brutto} seters={seters} />
				</GoodBruttoWrapper>
			)}
			{editValueMode && (
				<GoodValueWrapper onClick={onEditFalseValueMode}>
					<GoodDataInput name='value' value={value} seters={seters} />
				</GoodValueWrapper>
			)}
		</>
	)
}

export default GoodDataWrapper
