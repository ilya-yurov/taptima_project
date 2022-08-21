import styled from '@emotion/styled'

interface StyledButtonProps {
	width?: string
	height?: string
	bg?: string
	bgh?: string
	color?: string
}

export const StyledButtonWrapper = styled.button<StyledButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: ${props => props.theme.fonts.primary};
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	color: white;
	background-color: ${({bg}) => bg};
	width: ${({width}) => width};
	height: ${({height}) => height};
	&:hover {
		color: white;
		background-color: #2876cc;
	}
`
export const IconWrapper = styled.span`
	margin-left: 14px;
	margin-top: 5px;
`
export const ContactButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: OpenSans;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	width: 132px;
	height: 45px;
	color: #606f7a;
	background-color: white;
	box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
	&:hover {
		background-color: #2876cc;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const NextButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	width: 163px;
	height: 60px;
	color: white;
	background-color: #5daaff;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	&:hover {
		background-color: #2876cc;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const NextButtonSelect = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	width: 124px;
	height: 45px;
	color: white;
	background-color: #5daaff;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	&:hover {
		background-color: #2876cc;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const NextButtonMobile = styled.button`
	display: none;
	@media (max-width: 1200px) {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 3px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 600;
		font-size: 17px;
		line-height: 17px;
		width: 335px;
		height: 55px;
		color: white;
		background-color: #5daaff;
		box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
		&:hover {
			background-color: #2876cc;
		}
	}
`
export const SearchButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	width: 114px;
	height: 53px;
	color: white;
	background-color: #5daaff;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	&:hover {
		background-color: #2876cc;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const ChooseButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	min-width: 132px;
	min-height: 45px;
	color: white;
	background-color: #5daaff;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	margin-right: 27px;
	&:hover {
		background-color: #2876cc;
	}
`
export const ChoosedButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	min-width: 132px;
	min-height: 45px;
	color: #606f7a;
	background-color: white;
	box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.04);
	margin-right: 27px;
`
export const AddButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	width: 206px;
	height: 55px;
	color: white;
	background-color: #5daaff;
	&:hover {
		background-color: #2876cc;
	}
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
`
export const AddButtonMobile = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 10px;
	min-width: 68px;
	height: 30px;
	color: white;
	margin-right: 20px;
	background-color: #5daaff;
	&:hover {
		background-color: #2876cc;
	}
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
`
export const AddSelectButtonMobile = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	width: 100%;
	height: 55px;
	color: white;
	margin-right: 20px;
	background-color: #5daaff;
	&:hover {
		background-color: #2876cc;
	}
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
`
export const AddBasketButtonMobile = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px;
	width: 164px;
	height: 55px;
	color: white;
	margin-right: 20px;
	background-color: #5daaff;
	&:hover {
		background-color: #2876cc;
	}
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
`
