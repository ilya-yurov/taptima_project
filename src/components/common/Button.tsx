import {useTheme} from '@emotion/react'
import {
	StyledButtonWrapper,
	ContactButton,
	NextButtonSelect,
	ChoosedButton,
	NextButton,
	NextButtonMobile,
	SearchButton,
	ChooseButton,
	AddButton,
	AddButtonMobile,
	AddSelectButtonMobile,
	AddBasketButtonMobile,
	IconWrapper,
} from './styles/Button.styled'

interface ButtonProps {
	disabled?: boolean
	basket?: boolean
	type?: 'submit' | 'reset' | 'button'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
	icon?: 'arrow' | 'plus' | 'none'
	property?: 'next' | 'contact' | 'choose' | 'add' | 'search'

	content: string
	mobile?: boolean
	select?: boolean
	choosed?: boolean


	bg?: any
	bgh?: any
	color?: any
	width?: any
	height?: any
}

export const Button = (props: ButtonProps) => {
	let {
		property,
		content,
		bg = 'inherit',
		bgh = 'inherit',
		width, height,
		disabled = false,
		icon = 'none',
		mobile = false,
		choosed = false,
		basket,
		...restProps
	} = props

	return (
		<>
			<StyledButtonWrapper bg={bg} bgh={bgh} width={width} height={height} disabled={disabled} {...restProps}>
				{content}
				{icon === 'arrow' && (
					<IconWrapper>
						<img src='/arrows/arrow_button.png' alt='arrow' />
					</IconWrapper>
				)}
				{icon === 'plus' && !mobile && (
					<IconWrapper>
						<img src='/other/plus_button.png' alt='plus' />
					</IconWrapper>
				)}
			</StyledButtonWrapper>
		</>
	)
}
