import styled from '@emotion/styled';

export const SHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: flex-start;
@media (max-width: 1200px) {
	max-width: 375px;
	
}
`
export const StyledImgBaykal = styled.img`
width: 163px;
height: 40px;
`
export const StyledImgBack = styled.img`
width: 29px;
height: 20px;
background-color: #EFF3F9;
`

export const StyledBurger = styled.button`
display: none;
@media (max-width: 1200px) {
display: block;
width: 22px;
height: 20px;
border: none;
background: url("/other/menu_burger.png");
}
`
export const SelectHeaderWrapper = styled.header`
	flex-grow: 1;
	@media (max-width: 1200px) {
		display: none;
	}

`
export const SelectHeader = styled.header`
	width: 261px;
	height: 45px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	color: #606F7A;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 7px;
	margin-left: 30px;
	&:hover {
		width: 372px;
		border-radius: 5px;
		background-color: white;
		margin-left: 60px;
	}
	@media (max-width: 1200px) {
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 0px;
		font-family: 'OpenSans';
		font-weight: 600;
		div {
			align-items: center;
			display: flex;
			gap: 7px;
			img{
				width: 20px;
				height: 10px;
			}
		}
		&:hover {
			width: inherit;
			border-radius: inherit;
			background-color: inherit;;
			margin-left: inherit;
		}
	}
`
export const FormWrapper = styled.div`
flex-grow: 1;
`
