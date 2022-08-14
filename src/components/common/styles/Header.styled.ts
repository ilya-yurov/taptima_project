import styled from '@emotion/styled';

export const SHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: flex-flex-start;
`
export const StyledImg = styled.img`
width: 163px;
height: 40px;
`
export const StyledBurger = styled.button`
display: none;
@media (max-width: 1200px) {
display: block;
width: 22px;
height: 20px;
border: none;
background: url("/menu_burger.png");
}
`
export const SelectHeaderWrapper = styled.header`
	flex-grow: 1;

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
`
export const FormWrapper = styled.div`
flex-grow: 1;
`
