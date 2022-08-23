import { useTheme } from '@emotion/react'
import { StyledButtonWrapper, IconWrapper } from './Button.styled'

interface ButtonProps {
	disabled?: boolean
	type?: 'submit' | 'reset' | 'button'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
	icon?: 'arrow' | 'plus' | 'none'
	property?: 'next' | 'contact' | 'choose' | 'add' | 'search'
	content: string
	bg?: any
	ff?: any
	fz?: any
	bgh?: any
	color?: any
	width?: any
	height?: any
	ch?: any
}

export const Button = (props: ButtonProps) => {
	const theme = useTheme()
	let {
		property,
		content,
		ff = theme.fonts.primary,
		bg = theme.backgrounds.primary,
		bgh = theme.backgrounds.secondary,
		color = theme.colors.secondary,
		ch = theme.colors.secondary,
		fz = theme.fontSizes.primary,
		width,
		height,
		disabled = false,
		icon = 'none',
		...restProps
	} = props
	return (
		<>
			<StyledButtonWrapper bg={bg} fz={fz} ch={ch} bgh={bgh} color={color} width={width} height={height} disabled={disabled} {...restProps}>
				{content}
				{icon === 'arrow' && (
					<IconWrapper>
						<img src='/arrows/arrow_button.png' alt='arrow' />
					</IconWrapper>
				)}
				{icon === 'plus' && (
					<IconWrapper>
						<img src='/other/plus_button.png' alt='plus' />
					</IconWrapper>
				)}
			</StyledButtonWrapper>
		</>
	)
}
