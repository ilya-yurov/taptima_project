import styled from '@emotion/styled'

interface StyledButtonProps {
	width?: string
	height?: string
	bg?: string
	bgh?: string
	ch?: string
	color?: string
	ff?: string
	fz?: string
	fw?: string
}

export const StyledButtonWrapper = styled.button<StyledButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	font-family: ${({ ff }) => ff};
	font-weight: ${({ fw = 600 }) => fw};
	font-size: ${({ fz }) => fz};
	line-height: 17px;
	color: ${({ color }) => color};
	background-color: ${({ bg }) => bg};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	&:hover {
		color: ${({ ch }) => ch};
		background-color: ${({ bgh }) => bgh};
	}
`
export const IconWrapper = styled.span`
	margin-left: 14px;
	margin-top: 5px;
`
