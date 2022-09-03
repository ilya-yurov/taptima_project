import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import {IGoodsData} from '../../../store/goodsData'
import BasketElementDesktop from './BasketElementDesktop/BasketElementDesktop'
import BasketElementMobile from './BasketElementMobile/BasketElementMobile'

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

const BasketElement = ({ basket, deleteBasketElement, currentBasketElement, setRenderTrigger, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }: BasketElementProps) => {
	return (
		<>
			<DesktopWrapper>
				<BasketElementDesktop
					basket={basket}
					deleteBasketElement={deleteBasketElement}
					currentBasketElement={currentBasketElement}
					setRenderTrigger={setRenderTrigger}
					setCountGlobal={setCountGlobal}
					setNettoGlobal={setNettoGlobal}
					setBruttoGlobal={setBruttoGlobal}
					setValueGlobal={setValueGlobal}
				/>
			</DesktopWrapper>
			<MobileWrapper>
				<BasketElementMobile basket={basket} deleteBasketElement={deleteBasketElement} currentBasketElement={currentBasketElement} setRenderTrigger={setRenderTrigger} />
			</MobileWrapper>
		</>
	)
}

export default BasketElement
