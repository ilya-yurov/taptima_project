import styled from '@emotion/styled';

interface ButtonProps {
	width: string
	height: string
	color: string
	bgc: string
	content: string
	bs: boolean
	mq?: boolean
}

export const Button = ({width, height, color, bgc, content, bs, mq}: ButtonProps) => {
	const boxShaddow = bs ? '0px 4px 40px rgba(0, 0, 0, 0.15)' : 'none';
	const StyledButton = styled.button`
		width: ${width};
		height: ${height};
		color: ${color};
		background-color: ${bgc};
		box-shadow: ${boxShaddow};
		border-radius: 3px;
		font-weight: 600;
		${mq && '@media (max-width: 1200px){display: none;}'}
	`

	const StyledBurger = styled.button`
	display: none;
	@media (max-width: 1200px) {
		display: block;
		width: 22px;
		height: 20px;
		border: none;
		background: url("/menu_burger.png");
	}
	`
	return (
		<>
			<StyledButton>{content}</StyledButton>
			<StyledBurger/>
		</>
	);
};
