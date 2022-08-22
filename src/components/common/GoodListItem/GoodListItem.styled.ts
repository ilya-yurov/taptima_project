import styled from '@emotion/styled'

export const GoodDesktop = styled.section`
	display: flex;
	align-items: center;
	height: 99px;
	background: #f8faff;
	border: 1px solid #e2e4ea;
	border-radius: 3px;
	padding-right: 27px;
	p {
		flex-grow: 1;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 17px;
		color: #606f7a;
	}
	img {
		width: 120px;
		height: 97px;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const GoodMobile = styled.section`
	justify-content: center;
	display: flex;
	align-items: center;
	height: 60px;
	background: #f8faff;
	border: 1px solid #e2e4ea;
	border-radius: 3px;
	padding-right: 27px;
	p {
		flex-grow: 1;
		max-width: 130px;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		color: #606f7a;
	}
	img {
		width: 69px;
		height: 48px;
	}
	@media (min-width: 1200px) {
		display: none;
	}
`