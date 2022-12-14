import { useTheme } from '@emotion/react'
import { Dispatch, SetStateAction } from 'react'
import {IGoodsData} from '../../../../store/goodsData'
import { DescriptionWrapper, GoodImg, MobileElementWrapper, StyledIcon } from './BasketElementMobile.styled'

interface BasketElementProps {
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => void
	currentBasketElement: IGoodsData
	setRenderTrigger: Dispatch<SetStateAction<boolean>>
}

const BasketElementMobile = ({ basket, deleteBasketElement, currentBasketElement, setRenderTrigger }: BasketElementProps) => {
	const theme = useTheme()
	const currentGoodElementIndex = basket.findIndex((el) => el.id === currentBasketElement.id)
	const onDeleteHandler = () => {
		deleteBasketElement(currentGoodElementIndex)
		setRenderTrigger((prev) => !prev)
	}
	return (
		<>
			<MobileElementWrapper fw={theme.weight.secondary}>
				<section>
					<GoodImg src={currentBasketElement.img} alt="good's photo" />
					<p>{currentBasketElement.description}</p>
					<StyledIcon>
						<img src='/other/redact_basket.png' alt='redact' />
					</StyledIcon>
					<StyledIcon onClick={onDeleteHandler}>
						<img src='/other/delete_basket.png' alt='delete' />
					</StyledIcon>
				</section>
				<DescriptionWrapper fw={theme.weight.secondary}>
					<article>
						<div>Кол-во:</div>
						<div>{currentBasketElement.count}</div>
					</article>
					<article>
						<div>Общая масса нетто, кг:</div>
						<div>{currentBasketElement.netto}</div>
					</article>
					<article>
						<div>Общая масса брутто, кг:</div>
						<div>{currentBasketElement.brutto}</div>
					</article>
					<article>
						<div>Общий объем, м3:</div>
						<div>{currentBasketElement.value}</div>
					</article>
					<article>
						<div>Стоимость единицы:</div>
						<div>{currentBasketElement.cost + ' руб.'}</div>
					</article>
				</DescriptionWrapper>
			</MobileElementWrapper>
		</>
	)
}

export default BasketElementMobile
