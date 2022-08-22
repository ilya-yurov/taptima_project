import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import { IGoodsData, ISetPayload } from '../../../redux/goodsDataReducer'
import SelectionDesktop from './SelectionDesktop/SelectionDesktop'
import SelectionMobile from './SelectionMobile/SelectionMobile'

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

interface NumberSelectionProps {
	goodData: IGoodsData
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	isChoosedToogle?: boolean
	deleteBasketElement: (id: number) => { type: string; payload: number }
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const NumberSelection = ({
	goodData,
	setIsChoosedToogle,
	basket,
	isChoosedToogle,
	addBasketElement,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
}: NumberSelectionProps) => {
	return (
		<>
			<DesktopWrapper>
				<SelectionDesktop
					goodData={goodData}
					setIsChoosedToogle={setIsChoosedToogle}
					basket={basket}
					isChoosedToogle={isChoosedToogle}
					addBasketElement={addBasketElement}
					setCountGlobal={setCountGlobal}
					setNettoGlobal={setNettoGlobal}
					setBruttoGlobal={setBruttoGlobal}
					setValueGlobal={setValueGlobal}
				/>
			</DesktopWrapper>
			<MobileWrapper>
				<SelectionMobile
					goodData={goodData}
					setIsChoosedToogle={setIsChoosedToogle}
					basket={basket}
					addBasketElement={addBasketElement}
					setCountGlobal={setCountGlobal}
					setNettoGlobal={setNettoGlobal}
					setBruttoGlobal={setBruttoGlobal}
					setValueGlobal={setValueGlobal}
				/>
			</MobileWrapper>
		</>
	)
}

export default NumberSelection
