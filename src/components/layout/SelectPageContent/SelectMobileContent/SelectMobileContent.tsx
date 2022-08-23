import { GoodsListItem } from '../../../common/GoodListItem/GoodsListItem'
import Header from '../../../common/Header/Header'
import NumberSelection from '../../../common/NumberSelection/NumberSelection'
import { ISelectPropsObject } from '../interfaces/interfaces'
import { ChoosedElementsMobile, GoodsListMobile, HeaderWrapper, NotChoosedP, SWrapperMobile } from './SelectMobileContent.styled'

interface SelectMobileContentProps {
	props: ISelectPropsObject
}

const SelectMobileContent = ({ props }: SelectMobileContentProps) => {
	const {
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
	} = props
	return (
		<>
			<SWrapperMobile>
				<HeaderWrapper>
					<Header setFilter={setFilter} disabled={isChoosedToogle} isNote={true} select={true} />
				</HeaderWrapper>
				{!isChoosedToogle && (
					<GoodsListMobile>
						{goodsData
							?.filter((obj) => obj.description.toLowerCase().includes(filter.toLowerCase()))
							.map((el, index) => (
								<GoodsListItem
									setSelectedGoodData={setSelectedGoodData}
									setIsChoosedToogle={setIsChoosedToogle}
									key={index}
									id={el.id}
									img={el.img}
									description={el.description}
									value={el.value}
									netto={el.netto}
									brutto={el.brutto}
									cost={el.cost}
									disabled={isChoosedToogle}
								/>
							))}
					</GoodsListMobile>
				)}
				{isChoosedToogle && (
					<ChoosedElementsMobile>
						{!isChoosedToogle && <NotChoosedP>Вы не выбрали пока ни одного элемента.</NotChoosedP>}
						{isChoosedToogle && (
							<NumberSelection
								basket={basket}
								goodData={selectedGoodData}
								isChoosedToogle={isChoosedToogle}
								setIsChoosedToogle={setIsChoosedToogle}
								deleteBasketElement={deleteBasketElement}
								addBasketElement={addBasketElement}
								setCountGlobal={setCountGlobal}
								setNettoGlobal={setNettoGlobal}
								setBruttoGlobal={setBruttoGlobal}
								setValueGlobal={setValueGlobal}
							/>
						)}
					</ChoosedElementsMobile>
				)}
			</SWrapperMobile>
		</>
	)
}

export default SelectMobileContent
