import styled from '@emotion/styled'

export const SearchForm = styled.form`
	display: flex;
`
export const SearchInput = styled.input<{ fw: string }>`
	max-height: 22px;
	background: none;
	box-shadow: none;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #c2c3c4;
	border-bottom: 1.5px solid #c2c3c4;
	max-width: 204px;
	padding: 0px 5px 7px 0px;
	&::placeholder {
		color: #c2c3c4;
	}
`
