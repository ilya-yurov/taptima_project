import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
	@media (max-width: 1200px) {
		padding: 0 20px;
	}
`
export const NoGoodsWrapper = styled.div`
	padding: 49px 97px 0px 97px;
	height: 100vh;
	display: grid;
	grid-template-rows: 40px 1fr;
	gap: 10px;
	section {
		justify-self: center;
		align-self: center;
		margin-bottom: 200px;
		p {
			position: relative;
			font-family: 'OpenSans';
			font-style: normal;
			line-height: 30px;
			color: #606f7a;
			p {
				position: static;
			}
		}
	}
	@media (max-width: 1200px) {
		width: 375px;
		margin: 0px auto;
		padding: 24px 0px 0px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		section {
			margin-top: 100px;
			text-align: center;
		}
	}
`
export const NoAddButtonWrapper = styled.section`
	position: absolute;
	left: 80px;
	top: 50px;
	@media (max-width: 1200px) {
		top: -25px;
	}
`
