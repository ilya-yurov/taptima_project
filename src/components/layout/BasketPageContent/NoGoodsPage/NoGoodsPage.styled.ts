import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
	@media (max-width: 1200px) {
		padding: 0px 20px;
		height: 58px;
	}
`
export const NoGoodsWrapper = styled.div`
	padding: 49px 97px 0px 97px;
	height: 100vh;
	display: grid;
	grid-template-rows: 40px 1fr;
	gap: 10px;
	@media (max-width: 1200px) {
		width: 320px;
		margin: 0px auto;
		padding: 24px 0px 0px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`
export const MainSection = styled.section`
	justify-self: center;
	display: flex;
	flex-direction: column;
	align-self: center;
	margin-bottom: 200px;
	@media (max-width: 1200px) {
		margin-top: 100px;
		text-align: center;
	}
`
export const MainContent = styled.section<{ fz: string }>`
	position: relative;
	line-height: 30px;
	color: #606f7a;
	font-size: ${({ fz }) => fz};
	p {
		position: static;
	}
`
export const NoAddButtonWrapper = styled.section`
	position: absolute;
	left: 120px;
	top: 50px;
	@media (max-width: 1200px) {
		left: 80px;
		top: 80px;
	}
`
