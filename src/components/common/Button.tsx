import {
	StyledButtonWrapper, ContactButton, NextButtonSelect, ChoosedButton,
	NextButton, NextButtonMobile, SearchButton, ChooseButton, AddButton, AddButtonMobile,
	AddSelectButtonMobile, AddBasketButtonMobile, IconWrapper
} from './styles/Button.styled';

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
	choosed?: boolean
}

export const Button = (props: ButtonProps) => {

	let {property, select = false, content,
		disabled = false, icon = 'none',
		mobile = false, choosed = false, basket, ...restProps} = props

	let CurrentButton: typeof StyledButtonWrapper = StyledButtonWrapper;
	if (property === 'contact')
		CurrentButton = ContactButton
	else if (property === 'next' && select) {
		CurrentButton = NextButtonSelect
		content = 'Сохранить'
		icon = 'none'
	}
	else if (choosed)
		CurrentButton = ChoosedButton
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
					<img src="/other/plus_button.png" alt="plus" />
				</IconWrapper>}
			</CurrentButton>
		</>
	)
}
