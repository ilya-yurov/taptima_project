import {ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState} from "react";
import {IGoodsData, ISetPayload} from "../../redux/goodsDataReducer";
import {setCorrectValue} from "../../utils/helpers";
import {
	DesktopElementWrapper, GoodImgWrapper, GoodImg, GoodDescriptionWrapper,
	GoodCountWrapper, GoodNettoWrapper, GoodBruttoWrapper, GoodValueWrapper, GoodCostWrapper,
	GoodDeleteWrapper, MobileElementWrapper, StyledIcon, DescriptionWrapper
} from "./styles/BasketElement.styled";

interface BasketElementProps {
	basket: IGoodsData[]
	mobile?: boolean
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	currentBasketElement: IGoodsData
	setRenderTrigger: Dispatch<SetStateAction<boolean>>
	setCountGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setNettoGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setBruttoGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
	setValueGlobal: (index: number, data: any) => ({type: string, payload: ISetPayload})
}


const BasketElement = ({basket, deleteBasketElement, currentBasketElement, setRenderTrigger, mobile,
	setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal}: BasketElementProps) => {

	const [count, setCount] = useState(currentBasketElement.count)
	const [netto, setNetto] = useState(currentBasketElement.netto)
	const [brutto, setBrutto] = useState(currentBasketElement.brutto)
	const [value, setValue] = useState(currentBasketElement.value)

	const [editCountMode, setEditCountMode] = useState(false)
	const [editNettoMode, setEditNettoMode] = useState(false)
	const [editBruttoMode, setEditBruttoMode] = useState(false)
	const [editValueMode, setEditValueMode] = useState(false)

	const currentGoodElementIndex = basket.findIndex((el => el.id === currentBasketElement.id))

	const onDeleteHandler = () => {
		deleteBasketElement(currentGoodElementIndex)
		setRenderTrigger(prev => !prev)
	}

	const onCountChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0)
			setCount('')
		else
			setCount(value)
	}
	const onNettoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0)
			setNetto('')
		else
			setNetto(value)
	}
	const onBruttoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0)
			setBrutto('')
		else
			setBrutto(value)
	}
	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0)
			setValue('')
		else
			setValue(value)
	}

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
			{!mobile ?
				<DesktopElementWrapper>
					<GoodImgWrapper><GoodImg src={currentBasketElement.img} alt="good's photo" /></GoodImgWrapper>
					<GoodDescriptionWrapper>{currentBasketElement.description}</GoodDescriptionWrapper>
					{!editCountMode && <GoodCountWrapper onClick={onEditCountMode}>{currentBasketElement.count}</GoodCountWrapper>}
					{!editNettoMode && <GoodNettoWrapper onClick={onEditNettoMode}>{currentBasketElement.netto}</GoodNettoWrapper>}
					{!editBruttoMode && <GoodBruttoWrapper onClick={onEditBruttoMode}>{currentBasketElement.brutto}</GoodBruttoWrapper>}
					{!editValueMode && <GoodValueWrapper onClick={onEditValueMode}>{currentBasketElement.value}</GoodValueWrapper>}
					{editCountMode &&
						<GoodCountWrapper onClick={onEditFalseCountMode}>
							<input
								autoFocus
								name="count"
								id="count"
								type="text"
								value={count}
								onChange={onCountChange}
							/>
						</GoodCountWrapper>}
					{editNettoMode &&
						<GoodNettoWrapper onClick={onEditFalseNettoMode}>
							<input
								autoFocus
								name="netto"
								id="netto"
								type="text"
								value={netto}
								onChange={onNettoChange}
							/>
						</GoodNettoWrapper>}
					{editBruttoMode &&
						<GoodBruttoWrapper onClick={onEditFalseBruttoMode}>
							{<input
								autoFocus
								name="brutto"
								id="brutto"
								type="text"
								value={brutto}
								onChange={onBruttoChange}
							/>}
						</GoodBruttoWrapper>}
					{editValueMode &&
						<GoodValueWrapper onClick={onEditFalseValueMode}>
							{<input
								autoFocus
								name="value"
								id="value"
								type="text"
								value={value}
								onChange={onValueChange}
							/>}
						</GoodValueWrapper>}
					<GoodCostWrapper>{currentBasketElement.cost + ' руб.'}</GoodCostWrapper>
					<GoodDeleteWrapper>
						<button onClick={onDeleteHandler}><img src="/other/delete_button.png" alt="delete" /></button>
					</GoodDeleteWrapper>
				</DesktopElementWrapper>
				:
				<MobileElementWrapper>
					<section>
						<GoodImg src={currentBasketElement.img} alt="good's photo" />
						<p>{currentBasketElement.description}</p>
						<StyledIcon><img src="/other/redact_basket.png" alt="redact" /></StyledIcon>
						<StyledIcon onClick={onDeleteHandler}><img src="/other/delete_basket.png" alt="delete" /></StyledIcon>
					</section>
					<DescriptionWrapper>
						<article>
							<div>Кол-во:</div><div>{currentBasketElement.count}</div>
						</article>
						<article>
							<div>Общая масса нетто, кг:</div><div>{currentBasketElement.netto}</div>
						</article>
						<article>
							<div>Общая масса брутто, кг:</div><div>{currentBasketElement.brutto}</div>
						</article>
						<article>
							<div>Общий объем, м3:</div><div>{currentBasketElement.value}</div>
						</article>
						<article>
							<div>Стоимость единицы:</div><div>{currentBasketElement.cost + ' руб.'}</div>
						</article>
					</DescriptionWrapper>
				</MobileElementWrapper>
			}
		</>
	)
}

export default BasketElement