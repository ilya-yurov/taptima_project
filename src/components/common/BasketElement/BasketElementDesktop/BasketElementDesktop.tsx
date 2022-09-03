import { Dispatch, SetStateAction } from 'react'
import {IGoodsData} from '../../../../store/goodsData'
import { DesktopElementWrapper, GoodImgWrapper, GoodImg, GoodDescriptionWrapper, GoodCostWrapper, GoodDeleteWrapper } from './BasketElementDesktop.styled'
import GoodDataWrapper from './GoodDataWrapper/GoodDataWrapper'

interface BasketElementProps {
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => void
	currentBasketElement: IGoodsData
	setRenderTrigger: Dispatch<SetStateAction<boolean>>
	setCountGlobal: (index: number, data: any) => void
	setNettoGlobal: (index: number, data: any) => void
	setBruttoGlobal: (index: number, data: any) => void
	setValueGlobal: (index: number, data: any) => void
}

const BasketElementDesktop = ({ basket, deleteBasketElement, currentBasketElement, setRenderTrigger, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }: BasketElementProps) => {
	const currentGoodElementIndex = basket.findIndex((el) => el.id === currentBasketElement.id)
	const onDeleteHandler = () => {
		deleteBasketElement(currentGoodElementIndex)
		setRenderTrigger((prev) => !prev)
	}
	return (
		<>
			<DesktopElementWrapper>
				<GoodImgWrapper>
					<GoodImg src={currentBasketElement.img} alt="good's photo" />
				</GoodImgWrapper>
				<GoodDescriptionWrapper>{currentBasketElement.description}</GoodDescriptionWrapper>
				<GoodDataWrapper
					currentBasketElement={currentBasketElement}
					currentGoodElementIndex={currentGoodElementIndex}
					setCountGlobal={setCountGlobal}
					setNettoGlobal={setNettoGlobal}
					setBruttoGlobal={setBruttoGlobal}
					setValueGlobal={setValueGlobal}
				/>
				<GoodCostWrapper>{currentBasketElement.cost + ' руб.'}</GoodCostWrapper>
				<GoodDeleteWrapper>
					<button onClick={onDeleteHandler}>
						<img src='/other/delete_button.png' alt='delete' />
					</button>
				</GoodDeleteWrapper>
			</DesktopElementWrapper>
		</>
	)
}

export default BasketElementDesktop
