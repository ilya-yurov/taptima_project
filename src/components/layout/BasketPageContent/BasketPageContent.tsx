import { IGoodsData, deleteBasketElement, setCountGlobal, ISetPayload, setNettoGlobal, setBruttoGlobal, setValueGlobal } from '../../../redux/goodsDataReducer'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import NoGoodsPage from './NoGoodsPage/NoGoodsPage'
import BasketPageMobile from './BasketPageMobile/BasketPageMobile'
import BasketPageDesktop from './BasketPageDesktop/BasketPageDesktop'

export const MobileWrapper = styled.section`
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
	}
`

interface BusketPageContentProps {
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => { type: string; payload: number }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const BusketPageContent = ({ basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }: BusketPageContentProps) => {
	const [renderTrigger, setRenderTrigger] = useState(false)
	const props = { renderTrigger, setRenderTrigger, basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }
	useEffect(() => {}, [renderTrigger])
	return (
		<>
			{basket.length > 0 ? (
				<>
					<MobileWrapper>
						<BasketPageMobile props={props} />
					</MobileWrapper>
					<DesktopWrapper>
						<BasketPageDesktop props={props} />
					</DesktopWrapper>
				</>
			) : (
				<NoGoodsPage />
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
