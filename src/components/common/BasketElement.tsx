import styled from "@emotion/styled";
import {Dispatch, SetStateAction} from "react";
import {IGoodsData} from "../../redux/goodsDataReducer";

export const DesktopElementWrapper = styled.article`
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
export const MobileElementWrapper = styled.article`
	border-radius: 5px;
	background-color: #FCFDFF;
	section {
		display: flex;
		align-items: center;
		p{
			margin-left: 20px;
			flex-grow: 1;
			height: 100%;
			max-width: 115px;
			font-family: 'OpenSans';
			font-style: normal;
			font-weight: 600;
			font-size: 17px;
			line-height: 18px;
			color: #606F7A;
		}
	}
`

export const GoodImg = styled.img`
	width: 119px;
	height: 96px;
	@media (max-width: 1200px) {
		
		width: 108px;
	}
`
export const StyledIcon = styled.button`
	border: 1px solid black;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border-width: 1px;
	margin-left: 15px;
	border-color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	img {
		width: 20px;
		height: 20px;
	}
	`

	export const DescriptionWrapper = styled.section`
		display: flex;
		flex-direction: column;
		gap: 12px;
		article {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 18px;
			div {
				font-family: 'OpenSans';
				font-style: normal;
				font-weight: 600;
				font-size: 13px;
				line-height: 12px;
				color: #606F7A;
				padding: 0px 10px 0px 10px;
			}
			&:last-child {
				margin-bottom: 10px;
			}
		}
	`

interface BasketElementProps {
	basket: IGoodsData[]
	mobile?: boolean
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	currentBasketElement: IGoodsData
	setRenderTrigger: Dispatch<SetStateAction<boolean>>
}


const BasketElement = ({basket, deleteBasketElement, currentBasketElement, setRenderTrigger, mobile}: BasketElementProps) => {

	const {id, img, description, count, netto, brutto, value, cost} = currentBasketElement

	const onDeleteHandler = () => {
		deleteBasketElement(basket.findIndex((el => el.id === id)))
		setRenderTrigger(prev => !prev)
	}

	return (
		<>
			{!mobile ?
				<DesktopElementWrapper>
					<p><GoodImg src={img} alt="good's photo" /></p>
					<p>{description}</p>
					<p>{count}</p>
					<p>{netto}</p>
					<p>{brutto}</p>
					<p>{value}</p>
					<p>{cost / count + ' руб.'}</p>
					<p>
						<button onClick={onDeleteHandler}><img src="/delete_button.png" alt="delete" /></button>
					</p>
				</DesktopElementWrapper>
				:
				<MobileElementWrapper>
					<section>
						<GoodImg src={img} alt="good's photo" />
						<p>{description}</p>
						<StyledIcon><img src="/redact_basket.png" alt="redact" /></StyledIcon>
						<StyledIcon onClick={onDeleteHandler}><img src="/delete_basket.png" alt="delete" /></StyledIcon>
					</section>
					<DescriptionWrapper>
						<article>
							<div>Кол-во:</div><div>{count}</div>
						</article>
						<article>
							<div>Общая масса нетто, кг:</div><div>{netto}</div>
						</article>
						<article>
							<div>Общая масса брутто, кг:</div><div>{brutto}</div>
						</article>
						<article>
							<div>Общий объем, м3:</div><div>{value}</div>
						</article>
						<article>
							<div>Стоимость единицы:</div><div>{cost/count + ' руб.'}</div>
						</article>
						<article>
							<div>Итого:</div><div>{cost + ' руб.'}</div>
						</article>
					</DescriptionWrapper>
				</MobileElementWrapper>
			}
		</>
	)
}

export default BasketElement