import styled from '@emotion/styled';

interface ButtonProps {
	width?: string
	height?: string
	weight?: string
	color?: string
	font?: string
	bgc?: string
	content?: string
	bs?: boolean
	mq?: boolean
	disabled?: boolean
	type?: 'submit' | 'reset' | 'button'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
	icon?: 'arrow' | 'plus' | 'none'
}

export const Button = (props: ButtonProps) => {
	
	const {width, height, weight = '600',
	font = 'OpenSans', color, bgc,
	content, bs, mq, disabled = false,
	icon = 'none', ...restProps} = props
	
	const boxShaddow = bs ? '0px 4px 40px rgba(0, 0, 0, 0.15)' : 'none';
	const StyledButton = styled.button`
		display: flex;
		justify-content: center;
		align-items: center;
		width: ${width};
		height: ${height};
		color: ${color};
		font-family: ${font};
		background-color: ${bgc};
		box-shadow: ${boxShaddow};
		border-radius: 3px;
		font-weight: ${weight};
		${mq ? '@media (max-width: 1200px){display: none;}' : '@media (min-width: 1200px){display: none;}'}
	`

	const IconWrapper = styled.span`
	margin-left: 14px;
	margin-top: 5px;
	`

	return (
		<>
			<StyledButton
				disabled={disabled}
				{...restProps}>
				{content}
				{icon === 'arrow' && <IconWrapper>
					<img src="/arrow_button.png" alt="arrow" />
				</IconWrapper>}
				{icon === 'plus' && <IconWrapper>
					<img src="/plus_button.png" alt="plus" />
				</IconWrapper>}
			</StyledButton>
		</>
	);
};
