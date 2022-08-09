import {Header} from '../../common/Header'
import styled from '@emotion/styled'

const MainPage = () => {
	const StyledWrapper = styled.div`
		height: 100vh;
		padding: 49px 97px 0px 97px;
		font-size: 30px;
		background: url("/mainpage_background.png") right bottom no-repeat;
		@media (max-width: 1200px) {
			margin: 0px auto;
			max-width: 470px;
			background: none;
			padding: 24px 20px 0px 20px;
		}
	`
	const StyledArticle = styled.article`
		font-size: 48px;
		line-height: 64px;
		color: #606F7A;
		@media (max-width: 1200px) {
			font-weight: 300;
			font-size: 31px;
			line-height: 40px;
		}
	`

	const StyledMain = styled.main`
		margin-top: 156px;
		@media (max-width: 1200px) {
			display: flex;
			flex-direction: column;
			margin-top: 35px;
			justify-items: center;
			align-items: center;
		}
	`

	return (
		<StyledWrapper>
			<Header />
			<StyledMain>
				<StyledArticle>Рассчитайте<br />
					стоимость доставки из Китая</StyledArticle>
			</StyledMain>
		</StyledWrapper>
	)
}

export default MainPage