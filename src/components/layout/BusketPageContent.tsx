import Header from '../common/Header/Header'
import {
	IGoodsData,
	deleteBasketElement,
	setCountGlobal,
	ISetPayload,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
} from '../../redux/goodsDataReducer'
import { connect } from 'react-redux'
import BasketElement from '../common/BasketElement/BasketElement'
import { useEffect, useState } from 'react'
import { Button } from '../common/Button'
import { useRouter } from 'next/router'
import { FormNotification } from '../common/FormNotification'
import {
	BusketWrapper,
	HeaderWrapper,
	BusketHeader,
	SheetHeader,
	Plug,
	GoodsListWrapper,
	AddButtonWrapper,
	NoGoodsWrapper,
	NoAddButtonWrapper,
} from './styles/BusketPageContent.styled'

interface BusketPageContentProps {
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => { type: string; payload: number }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const BusketPageContent = ({
	basket,
	deleteBasketElement,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
}: BusketPageContentProps) => {
	const [renderTrigger, setRenderTrigger] = useState(false)
	const [mobile, setMobile] = useState<boolean>()
	const [note, setNote] = useState(true)
	const [note2, setNote2] = useState(true)
	const [note3, setNote3] = useState(true)

	useEffect(() => {
		window.innerWidth <= 1200 ? setMobile(true) : setMobile(false)
		window.addEventListener('resize', () => {
			window.innerWidth <= 1200 ? setMobile(true) : setMobile(false)
		})
	}, [])
	useEffect(() => {}, [renderTrigger])
	const router = useRouter()

	const onAddClick = () => {
		router.push({ pathname: '/select' })
	}

	return (
		<>
			{basket.length > 0 ? (
				<>
					<BusketWrapper>
						<HeaderWrapper>
							<Header
								basket={true}
								select={true}
							/>
						</HeaderWrapper>
						<BusketHeader>Добавленная мебель ({basket.length})</BusketHeader>
						{note && (
							<FormNotification
								onClick={() => setNote(false)}
								content='Чтобы отредактировать  введенные ланные, просто нажмите на поле'
								property='added1'
							/>
						)}
						{note2 && (
							<FormNotification
								onClick={() => setNote2(false)}
								content='Через кнопку “Добавить” Вы можете добавлять еще элементы'
								property='added2'
							/>
						)}
						{note3 && (
							<FormNotification
								onClick={() => setNote3(false)}
								content='Узнайте стоимость доставки, нажав на кнопку “Рассчитать”'
								property='added3'
							/>
						)}
						{!mobile && (
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
						)}
						<GoodsListWrapper>
							{basket.map((el, index) => (
								<BasketElement
									setCountGlobal={setCountGlobal}
									setNettoGlobal={setNettoGlobal}
									setBruttoGlobal={setBruttoGlobal}
									setValueGlobal={setValueGlobal}
									key={index}
									mobile={mobile}
									currentBasketElement={el}
									basket={basket}
									deleteBasketElement={deleteBasketElement}
									setRenderTrigger={setRenderTrigger}
								/>
							))}
							<AddButtonWrapper>
								<p>
									<Button
										icon='plus'
										type='button'
										property='add'
										mobile={mobile}
										basket={true}
										onClick={onAddClick}
										content='Добавить'
									/>
									<Button
										type='button'
										basket={true}
										mobile={mobile}
										property='add'
										content='Рассчитать'
									/>
								</p>
							</AddButtonWrapper>
						</GoodsListWrapper>
					</BusketWrapper>
				</>
			) : (
				<>
					<NoGoodsWrapper>
						<HeaderWrapper>
							<Header
								basket={true}
								select={true}
							/>
						</HeaderWrapper>
						<section>
							<img
								src='/other/no_goods.png'
								alt='no goods'
							/>
							<p>
								Вы не добавили ни одного элемента.
								<NoAddButtonWrapper>
									{mobile ? (
										<Button
											type='button'
											property='add'
											onClick={onAddClick}
											content='Добавить'
										/>
									) : (
										<Button
											icon='plus'
											type='button'
											property='add'
											onClick={onAddClick}
											content='Добавить'
										/>
									)}
								</NoAddButtonWrapper>
							</p>
						</section>
					</NoGoodsWrapper>
				</>
			)}
		</>
	)
}

const mapStateToProps = (state: any) => ({
	basket: state.goodsData.basket,
})

export default connect(mapStateToProps, {
	deleteBasketElement,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
})(BusketPageContent)
