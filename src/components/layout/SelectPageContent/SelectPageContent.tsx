import { useState } from 'react'
import { IGoodsData, deleteBasketElement, addBasketElement, setCountGlobal, ISetPayload, setNettoGlobal, setBruttoGlobal, setValueGlobal } from '../../../redux/goodsDataReducer'
import { connect } from 'react-redux'
import SelectMobileContent from './SelectMobileContent/SelectMobileContent'
import styled from '@emotion/styled'
import SelectDesktopContent from './SelectDesktopContent/SelectDesktopContent'

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

interface SelectPageContentProps {
	goodsData: IGoodsData[]
	basket: IGoodsData[]
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	deleteBasketElement: (id: number) => { type: string; payload: number }
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
}

const SelectPageContent = ({ goodsData, basket, deleteBasketElement, addBasketElement, setCountGlobal, setNettoGlobal, setBruttoGlobal, setValueGlobal }: SelectPageContentProps) => {
	const [isChoosedToogle, setIsChoosedToogle] = useState(false)
	const [filter, setFilter] = useState('')
	const [selectedGoodData, setSelectedGoodData] = useState({ img: '', description: '', value: 0, netto: 0, brutto: 0, cost: 0 })
	const props = {
		setFilter,
		isChoosedToogle,
		goodsData,
		filter,
		setSelectedGoodData,
		setIsChoosedToogle,
		basket,
		selectedGoodData,
		deleteBasketElement,
		addBasketElement,
		setCountGlobal,
		setNettoGlobal,
		setBruttoGlobal,
		setValueGlobal,
	}
	return (
		<>
			<MobileWrapper>
				<SelectMobileContent props={props} />
			</MobileWrapper>
			<DesktopWrapper>
				<SelectDesktopContent props={props} />
			</DesktopWrapper>
		</>
	)
}

const mapStateToProps = (state: any) => ({
	goodsData: state.goodsData.goodsData,
	basket: state.goodsData.basket,
})

export default connect(mapStateToProps, {
	deleteBasketElement,
	addBasketElement,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
})(SelectPageContent)
