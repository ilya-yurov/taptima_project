import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BasketWrapper, HeaderWrapper, BasketHeader, GoodsListWrapper, AddButtonWrapper } from './BasketPageMobile.styled'
import { IGoodsData, ISetPayload } from '../../../../redux/goodsDataReducer'
import Header from '../../../common/Header/Header'
import BasketElement from '../../../common/BasketElement/BasketElement'
import { Button } from '../../../common/Button/Button'
import { useTheme } from '@emotion/react'

interface IBasketPropsObject {
	basket: IGoodsData[]
	renderTrigger: boolean
	setRenderTrigger: Dispatch<SetStateAction<boolean>>
	deleteBasketElement: (id: number) => { type: string; payload: number }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

interface BasketPageMobileProps {
	props: IBasketPropsObject
}

const BasketPageMobile = ({ props }: BasketPageMobileProps) => {
	const { basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal, renderTrigger, setRenderTrigger } = props
	useEffect(() => {}, [renderTrigger])
	const router = useRouter()
	const theme = useTheme()
	const onAddClick = () => {
		router.push({ pathname: '/select' })
	}
	return (
		<BasketWrapper>
			<HeaderWrapper>
				<Header basket={true} select={true} />
			</HeaderWrapper>
			<BasketHeader fw={theme.weight.secondary}>Добавленная мебель ({basket.length})</BasketHeader>
			<GoodsListWrapper>
				{basket.map((el, index) => (
					<BasketElement
						setCountGlobal={setCountGlobal}
						setNettoGlobal={setNettoGlobal}
						setBruttoGlobal={setBruttoGlobal}
						setValueGlobal={setValueGlobal}
						key={index}
						currentBasketElement={el}
						basket={basket}
						deleteBasketElement={deleteBasketElement}
						setRenderTrigger={setRenderTrigger}
					/>
				))}
				<AddButtonWrapper>
					<p>
						<Button width='164px' height='65px' type='button' property='add' onClick={onAddClick} content='Добавить' />
						<Button width='164px' height='65px' type='button' property='add' content='Рассчитать' />
					</p>
				</AddButtonWrapper>
			</GoodsListWrapper>
		</BasketWrapper>
	)
}

export default BasketPageMobile
