import styled from '@emotion/styled'

export const SHeader = styled.header`
	max-width: 375px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`

export const ImgBack = styled.img`
	width: 29px;
	height: 20px;
	background-color: #eff3f9;
`

export const StyledImgBaykal = styled.img`
	width: 163px;
	height: 40px;
`

export const SelectHeader = styled.header`
	width: 261px;
	height: 45px;
	font-style: normal;
	font-size: 17px;
	line-height: 17px;
	color: #606F7A;
	display: flex;
	gap: 7px;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 0px;
	font-family: 'OpenSans';
	font-weight: 600;
	div {
		align-items: center;
		display: flex;
		gap: 7px;
		img {
			width: 20px;
			height: 10px;
		}
	}
	&:hover {
		width: inherit;
		border-radius: inherit;
		background-color: inherit;
		margin-left: inherit;
	}
`

export const StyledBurger = styled.button`
	display: block;
	width: 22px;
	height: 20px;
	border: none;
	background: url('/other/menu_burger.png');
`
