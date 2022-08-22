import styled from '@emotion/styled'

export const SHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`
export const StyledImgBaykal = styled.img`
	width: 163px;
	height: 40px;
`
export const SelectHeaderWrapper = styled.header`
	flex-grow: 1;
`

export const SelectHeader = styled.header<{ ff: string }>`
	width: 261px;
	height: 45px;
	font-family: ${({ ff }) => ff};
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	color: #606f7a;
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