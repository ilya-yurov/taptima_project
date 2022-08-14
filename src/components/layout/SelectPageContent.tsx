import SearchBar from "../common/SearchBar"
import Header from "../common/Header"
import {GoodsListItem} from "../common/GoodsListItem"
import {
	SWrapper, HeaderWrapper, LeftArticle,
	RightArticle, SearchBarWrapper, GoodsList, ChoosedElements
} from "./styles/SelectPageContent.styled"
import styled from "@emotion/styled"
import {useState} from "react"
import {IGoodsData, deleteBasketElement, addBasketElement} from "../../redux/goodsDataReducer"
import {connect} from "react-redux"
import NumberSelection from "../common/NumberSelection"

const NotChoosedP = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 140px;

	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 23px;
	line-height: 23px;
	color: #606F7A;
`



interface SelectPageContentProps {
	goodsData: IGoodsData[]
	basket: IGoodsData[]
	deleteBasketElement: (id: number) => ({type: string, payload: number})
	addBasketElement: (newElement: IGoodsData) => ({type: string, payload: IGoodsData})
}



const SelectPageContent = ({goodsData, basket, deleteBasketElement, addBasketElement}: SelectPageContentProps) => {

	const [isChoosedToogle, setIsChoosedToogle] = useState(false)
	const [filter, setFilter] = useState('')
	const [selectedGoodData, setSelectedGoodData] = useState({img: '', description: '', value: 0, netto: 0, brutto: 0, cost: 0})
	return (
		<SWrapper>
			<HeaderWrapper>
				<Header isNote={true} select={true} />
			</HeaderWrapper>
			<LeftArticle>
				Выберите мебель, которую нужно<br />перевезти
			</LeftArticle>
			<RightArticle>
				Затем заполните следующие<br />поля выбранного элемента:
			</RightArticle>
			<SearchBarWrapper>
				<SearchBar setFilter={setFilter} disabled={isChoosedToogle} placeholder="Введите название" buttonText="Поиск" />
			</SearchBarWrapper>
			<GoodsList>
				{goodsData?.filter((obj) => obj.description.toLowerCase().includes(filter.toLowerCase())).map((el, index) =>
					<GoodsListItem
						setSelectedGoodData={setSelectedGoodData} setIsChoosedToogle={setIsChoosedToogle}
						key={index} id={el.id} img={el.img} description={el.description}
						value={el.value} netto={el.netto} brutto={el.brutto} cost={el.cost}
						disabled={isChoosedToogle}
					/>)}
			</GoodsList>
			<ChoosedElements>
				{!isChoosedToogle &&
					<NotChoosedP>
						Вы не выбрали пока ни одного элемента.
					</NotChoosedP>}
				{isChoosedToogle &&
					<NumberSelection
						basket={basket} goodData={selectedGoodData}
						setIsChoosedToogle={setIsChoosedToogle}
						deleteBasketElement={deleteBasketElement}
						addBasketElement={addBasketElement}
					/>}
			</ChoosedElements>
		</SWrapper>);
}


const mapStateToProps = (state: any) => ({
	goodsData: state.goodsData.goodsData,
	basket: state.goodsData.basket
})

export default connect(mapStateToProps, {deleteBasketElement, addBasketElement})(SelectPageContent)
