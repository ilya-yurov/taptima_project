import styled from '@emotion/styled'

export const MobileElementWrapper = styled.article<{ fw: string }>`
	border-radius: 5px;
	background-color: #fcfdff;
	section {
		display: flex;
		align-items: center;
		p {
			margin-left: 20px;
			flex-grow: 1;
			height: 100%;
			max-width: 115px;
			font-weight: ${({ fw }) => fw};
			font-size: 17px;
			line-height: 18px;
			color: #606f7a;
		}
	}
`
export const GoodImg = styled.img`
	width: 108px;
	height: 96px;
`
export const StyledIcon = styled.button`
	border: 1px solid black;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border-width: 1px;
	margin-left: 15px;
	border-color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;
	img {
		width: 20px;
		height: 20px;
	}
`
export const DescriptionWrapper = styled.section<{ fw: string }>`
	display: flex;
	flex-direction: column;
	gap: 12px;
	article {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 18px;
		div {
			font-weight: ${({ fw }) => fw};
			font-size: 13px;
			line-height: 12px;
			color: #606f7a;
			padding: 0px 10px 0px 10px;
		}
		&:last-child {
			margin-bottom: 10px;
		}
	}
`
