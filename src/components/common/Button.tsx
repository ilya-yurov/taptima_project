import styled from '@emotion/styled';


const StyledButtonWrapper = styled.button`
	font-family: OpenSans;
	font-weight: 600;
	font-size: 17px;
	line-height: 17px
`

const IconWrapper = styled.span`
	margin-left: 14px;
	margin-top: 5px;
`

const ContactButton = styled.button`
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
	color: #606F7A;
	background-color: white;
	box-shadow: 0px 4px 40px rgba(46, 80, 87, 0.12);
	@media (max-width: 1200px){display: none;}
`

const NextButton = styled.button`
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
	height: 67px;
	color: white;
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	@media (max-width: 1200px) {
		display: none;
	}
	`
const NextButtonSelect = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	@media (max-width: 1200px) {
		display: none;
	}
	`
	const NextButtonMobile = styled.button`
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
		background-color: #5DAAFF;
		box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	}
`
const SearchButton = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	@media (max-width: 1200px) {
		display: none;
	}
	`
const ChooseButton = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	margin-right: 27px;
	`

	const AddButton = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	`
	const AddButtonMobile = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	`
	const AddSelectButtonMobile = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	`
	const AddBasketButtonMobile = styled.button`
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
	background-color: #5DAAFF;
	box-shadow: 0px 4px 40px rgba(93, 170, 255, 0.29);
	`

interface ButtonProps {
	disabled?: boolean
	basket?: boolean
	type?: 'submit' | 'reset' | 'button'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
	icon?: 'arrow' | 'plus' | 'none'
	property?: 'next' | 'contact' | 'choose' | 'add' | 'search'
	bg?: 'white' | 'blue'
	content: string
	mobile?: boolean
	select?: boolean
}

export const Button = (props: ButtonProps) => {

	let {property, select = false, content,
		disabled = false, icon = 'none',
		mobile = false, basket, ...restProps} = props

	let CurrentButton: typeof StyledButtonWrapper = StyledButtonWrapper;
	if (property === 'contact')
		CurrentButton = ContactButton
	else if (property === 'next' && select){
		CurrentButton = NextButtonSelect
		content = 'Сохранить'
		icon = 'none'
	}
	else if (property === 'next' && !mobile)
		CurrentButton = NextButton
	else if (property === 'next' && mobile)
		CurrentButton = NextButtonMobile
	else if (property === 'search')
		CurrentButton = SearchButton
	else if (property === 'choose')
		CurrentButton = ChooseButton
	else if (property === 'add' && !mobile)
		CurrentButton = AddButton
	else if (property === 'add' && mobile) {
		CurrentButton = AddButtonMobile
		if (content === 'Сбросить' || content === 'Продолжить')
			CurrentButton = AddSelectButtonMobile
		if (basket)
			CurrentButton = AddBasketButtonMobile
	}
	return (
		<>
			<CurrentButton
				disabled={disabled}
				{...restProps}>
				{content}
				{icon === 'arrow' && <IconWrapper>
					<img src="/arrows/arrow_button.png" alt="arrow" />
				</IconWrapper>}
				{icon === 'plus' && !mobile && <IconWrapper>
					<img src="/plus_button.png" alt="plus" />
				</IconWrapper>}
			</CurrentButton>
		</>
	);
};
