import { GoodsListItem } from '../../../common/GoodListItem/GoodsListItem'
import Header from '../../../common/Header/Header'
import NumberSelection from '../../../common/NumberSelection/NumberSelection'
import SearchBar from '../../../common/SearchBar/SearchBar'
import { ISelectPropsObject } from '../interfaces/interfaces'
import { ChoosedElementsDesktop, GoodsListDesktop, HeaderWrapper, LeftArticle, NotChoosedP, RightArticle, SearchBarWrapper, SWrapperDesktop } from './SelectDesktopContent.styled'

interface SelectDesktopContentProps {
	props: ISelectPropsObject
}

const SelectDesktopContent = ({ props }: SelectDesktopContentProps) => {
	const {
		setFilter,
		isChoosedToogle,
		goodsDataInitial,
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
			<SWrapperDesktop>
				<HeaderWrapper>
					<Header setFilter={setFilter} disabled={isChoosedToogle} isNote={true} select={true} />
				</HeaderWrapper>
				<LeftArticle>
					Выберите мебель, которую
					<br />
					нужно перевезти
				</LeftArticle>
				<RightArticle>
					Затем заполните следующие
					<br />
					поля выбранного элемента:
				</RightArticle>
				<SearchBarWrapper>
					<SearchBar setFilter={setFilter} disabled={isChoosedToogle} placeholder='Введите название' buttonText='Поиск' />
				</SearchBarWrapper>
				<GoodsListDesktop>
					{goodsDataInitial
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
				</GoodsListDesktop>
				<ChoosedElementsDesktop>
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
				</ChoosedElementsDesktop>
			</SWrapperDesktop>
		</>
	)
}

export default SelectDesktopContent
