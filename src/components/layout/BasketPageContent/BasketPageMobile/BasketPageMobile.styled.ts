import styled from '@emotion/styled'

export const BasketWrapper = styled.div`
	padding: 49px 97px 0px 97px;
	height: 100vh;
	display: grid;
	grid-template-rows: 40px 135px 90px 1fr;
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
export const HeaderWrapper = styled.header`
	@media (max-width: 1200px) {
		padding: 0 20px;
	}
`
export const BasketHeader = styled.header`
	align-self: center;
	font-weight: 400;
	font-size: 36px;
	line-height: 36px;
	color: #606f7a;
	@media (max-width: 1200px) {
		padding: 0 20px;
		align-self: flex-start;
		font-weight: 600;
		font-size: 22px;
		margin-bottom: 15px;
		line-height: 20px;
	}
`
export const GoodsListWrapper = styled.section`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	@media (max-width: 1200px) {
		gap: 10px;
	}
`
export const AddButtonWrapper = styled.section`
	position: absolute;
	right: 100px;
	bottom: 30px;
	p {
		display: flex;
		gap: 12px;
	}
	@media (max-width: 1200px) {
		position: fixed;
		width: 320px;
		height: 0px;
		top: 50%;
		left: 50%;
		margin-top: 280px;
		margin-left: -160px;
		p {
			max-width: 320px;
			flex-direction: row-reverse;
			justify-content: space-between;
		}
	}
`
