import styled from '@emotion/styled'

export const SWrapper = styled.div`
	height: 100vh;
	padding: 49px 97px 0px 97px;
	font-size: 30px;
	background: url('/other/mainpage_background.png') right bottom no-repeat;
	@media (max-width: 1200px) {
		margin: 0px auto;
		width: 320px;
		background: none;
		padding: 24px 20px 0px 20px;
	}
`
export const SArticle = styled.article<{ fz: string }>`
	font-size: 48px;
	line-height: 64px;
	color: #606f7a;
	margin-bottom: 48px;
	@media (max-width: 1200px) {
		letter-spacing: -1px;
		margin-bottom: 0px;
		font-weight: 300;
		font-size: ${({ fz }) => fz};
		line-height: 40px;
	}
`
export const SMain = styled.main`
	margin-top: 156px;
	@media (max-width: 1200px) {
		/* min-width: 380px; */

		display: flex;
		flex-direction: column;
		margin-top: 35px;
		justify-items: center;
		align-items: center;
		br {
			display: none;
		}
	}
`
