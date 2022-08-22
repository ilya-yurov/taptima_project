import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BusketWrapper, HeaderWrapper, BusketHeader, SheetHeader, Plug, GoodsListWrapper, AddButtonWrapper } from './BasketPageDesktop.styled'
import { IGoodsData, ISetPayload } from '../../../../redux/goodsDataReducer'
import Header from '../../../common/Header/Header'
import { FormNotification } from '../../../common/FormNotification/FormNotification'
import BasketElement from '../../../common/BasketElement/BasketElement'
import { Button } from '../../../common/Button/Button'

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

interface BasketPageDesktopProps {
	props: IBasketPropsObject
}

const BasketPageDesktop = ({ props }: BasketPageDesktopProps) => {
	const { basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal, renderTrigger, setRenderTrigger } = props
	const [note, setNote] = useState(true)
	const [note2, setNote2] = useState(true)
	const [note3, setNote3] = useState(true)
	useEffect(() => {}, [renderTrigger])
	const router = useRouter()

	const onAddClick = () => {
		router.push({ pathname: '/select' })
	}

	return (
		<>
			<BusketWrapper>
				<HeaderWrapper>
					<Header basket={true} select={true} />
				</HeaderWrapper>
				<BusketHeader>Добавленная мебель ({basket.length})</BusketHeader>
				{note && <FormNotification onClick={() => setNote(false)} content='Чтобы отредактировать  введенные ланные, просто нажмите на поле' property='added1' />}
				{note2 && <FormNotification onClick={() => setNote2(false)} content='Через кнопку “Добавить” Вы можете добавлять еще элементы' property='added2' />}
				{note3 && <FormNotification onClick={() => setNote3(false)} content='Узнайте стоимость доставки, нажав на кнопку “Рассчитать”' property='added3' />}
				<SheetHeader>
					<Plug></Plug>
					<Plug></Plug>
					<p>Кол-во</p>
					<p>Общая масса нетто, кг</p>
					<p>Общая масса брутто, кг</p>
					<p>Общий объем, м3</p>
					<p>Стоимость единицы</p>
					<p>Удалить</p>
				</SheetHeader>
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
							<Button icon='plus' type='button' property='add' onClick={onAddClick} content='Добавить' width='206px' height='55px' />
							<Button type='button' property='add' content='Рассчитать' width='206px' height='55px' />
						</p>
					</AddButtonWrapper>
				</GoodsListWrapper>
			</BusketWrapper>
		</>
	)
}

export default BasketPageDesktop
