import styled from "@emotion/styled";

export const SWrapperDesktop = styled.div`
	height: 100vh;
	padding: 49px 97px 85px 97px;
	font-size: 30px;
	display: grid;
	grid-template-rows: 89px 163px 95px 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: 
	"header header"
	"leftArticle rightArticle"
	"searchBar choosedElements"
	"goodsList choosedElements";

	@media (max-width: 1200px) {
		margin: 0px auto;
		max-width: 380px;
		background: none;
		padding: 24px 20px 0px 20px;
	}
`

export const NotChoosedP = styled.p`
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

export const SWrapperMobile = styled.div`

	width: 375px;
	margin: 0px auto;
	padding: 24px 20px 0px 20px;
	height: 100%;
	display: flex;
	flex-direction: column;
`
export const HeaderWrapper = styled.article`
	grid-area: header;
`
export const LeftArticle = styled.article`
	grid-area: leftArticle;
	padding-top: 30px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 48px;
	color: #606F7A;
	
`
export const RightArticle = styled.article`
	grid-area: rightArticle;
	justify-self: center;
	padding-top: 30px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 48px;
	color: #606F7A;
`
export const SearchBarWrapper = styled.article`
	grid-area: searchBar;
	align-self: flex-start;;
	
`
export const GoodsListDesktop = styled.article`
	grid-area: goodsList;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	gap: 4px;
`
export const GoodsListMobile = styled.article`
	overflow-y: auto;
	margin-top: 25px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	img {
		width: 69px;
		height: 48px;
	}
`
export const ChoosedElementsDesktop = styled.article`
	grid-area: choosedElements;
`
export const ChoosedElementsMobile = styled.article`
	grid-area: choosedElements;
`
