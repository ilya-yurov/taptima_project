import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";
import {IGoodsData} from "../../redux/goodsDataReducer";

export const ElementWrapper = styled.article`
	display: grid;
	grid-template-columns: 120px 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
	justify-content: center;
	align-items: center;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	color: #606F7A;

	background-color: #F8FAFF;
	border: 1px solid #E2E4EA;
	border-radius: 5px;
	p {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		border-right: 1px solid #E2E4EA;
		button {
		background-color: #F8FAFF;
		}
		&:last-child {
			border: none;
		}
	}
`

export const GoodImg = styled.img`
	width: 119px;
	height: 96px;
`

interface BasketElementProps {
	basket:IGoodsData[]
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	currentBasketElement:IGoodsData
	setRenderTrigger:Dispatch<SetStateAction<boolean>>
}


const BasketElement = ({basket, deleteBasketElement, currentBasketElement, setRenderTrigger}:BasketElementProps) => {

	const {id, img, description, count, netto, brutto, value, cost} = currentBasketElement

	const onDeleteHandler = () => {
		deleteBasketElement(basket.findIndex((el => el.id === id)))
		setRenderTrigger(prev => !prev)
	}

	return (
		<ElementWrapper>
			<p><GoodImg src={img} alt="good's photo" /></p>
			<p>{description}</p>
			<p>{count}</p>
			<p>{netto}</p>
			<p>{brutto}</p>
			<p>{value}</p>
			<p>{cost/count + ' руб.'}</p>
			<p>
				<button onClick={onDeleteHandler}><img src="/delete_button.png" alt="delete" /></button>
			</p>
		</ElementWrapper>
	)
}

export default BasketElement