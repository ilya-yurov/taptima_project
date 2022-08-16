import styled from "@emotion/styled";

export const SearchForm = styled.form`
display: flex;
`;
export const SearchInput = styled.input`
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 15px;

	width: 370px;
	height: 53px;
	box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
	display: flex;
	justify-content: flex-start;
	margin-right: 8px;
	padding: 19px;
	@media (max-width: 1200px) {
		max-height: 22px;
		background: none;
		box-shadow: none;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 15px;
		color: #c2c3c4;
		border-bottom: 1.5px solid #c2c3c4;
		max-width: 204px;
		padding: 0px 5px 7px 0px;
		&::placeholder {
			color: #c2c3c4;
		}
	}
`;
