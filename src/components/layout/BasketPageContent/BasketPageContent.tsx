import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import NoGoodsPage from './NoGoodsPage/NoGoodsPage'
import BasketPageMobile from './BasketPageMobile/BasketPageMobile'
import BasketPageDesktop from './BasketPageDesktop/BasketPageDesktop'
import goodsData from '../../../store/goodsData'
import {observer} from 'mobx-react-lite'

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

const BusketPageContent = observer(() => {
	const [renderTrigger, setRenderTrigger] = useState(false)
	const { basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal } = goodsData
	const props = { basket, deleteBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal, renderTrigger, setRenderTrigger }
	useEffect(() => {}, [renderTrigger])
	return (
		<>
			{goodsData.basket.length > 0 ? (
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
})

export default BusketPageContent
