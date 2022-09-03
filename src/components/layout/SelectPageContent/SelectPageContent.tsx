import { useState } from 'react'
import SelectMobileContent from './SelectMobileContent/SelectMobileContent'
import styled from '@emotion/styled'
import SelectDesktopContent from './SelectDesktopContent/SelectDesktopContent'
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

const SelectPageContent = observer(() => {
	const [isChoosedToogle, setIsChoosedToogle] = useState(false)
	const [filter, setFilter] = useState('')
	const [selectedGoodData, setSelectedGoodData] = useState({ img: '', description: '', value: 0, netto: 0, brutto: 0, cost: 0 })
	const {goodsDataInitial,
		basket,
		deleteBasketElement,
		addBasketElement,
		setCountGlobal,
		setNettoGlobal,
		setBruttoGlobal,
		setValueGlobal} = goodsData
	
	const props = {
		isChoosedToogle, 
		setIsChoosedToogle, 
		setFilter,
		filter,
		selectedGoodData,
		setSelectedGoodData,
		goodsDataInitial,
		basket,
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
})

export default SelectPageContent
