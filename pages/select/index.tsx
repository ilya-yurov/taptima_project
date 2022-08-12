import {useRouter} from "next/router"
import SearchBar from "../../src/components/common/SearchBar"
import Header from "../../src/components/layout/Header"
import {GoodsListItem} from "../../src/components/common/GoodsListItem"
import {goodsData} from "../../src/api/data"
import {SWrapper, HeaderWrapper, LeftArticle,
RightArticle, SearchBarWrapper, GoodsList, ChoosedElements} from "../styles/SelectPage.styled"

const SelectPage = () => {

	const router = useRouter()

	return (
		<SWrapper>
			<HeaderWrapper>
				<Header select={true} />
			</HeaderWrapper>
			<LeftArticle>
				Выберите мебель, которую нужно<br />перевезти
			</LeftArticle>
			<RightArticle>
				Затем заполните следующие<br />поля выбранного элемента:
			</RightArticle>
			<SearchBarWrapper>
				<SearchBar placeholder="Введите название" buttonText="Поиск" />
			</SearchBarWrapper>
			<GoodsList>
				{goodsData.map((el, index) => <GoodsListItem key={index} img={el.img} description={el.description} />)}
			</GoodsList>
			<ChoosedElements>
				Choosed Elements
			</ChoosedElements>
		</SWrapper>
	)
}

export default SelectPage
