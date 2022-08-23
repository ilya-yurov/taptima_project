import styled from '@emotion/styled'

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	input {
		width: 319px;
		height: 53px;
		padding: 19px;
		font-size: 15px;
		color: #606f7a;
		box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
		border-radius: 3px;
		&:disabled {
			background-color: white;
		}
		@media (max-width: 1200px) {
			margin-left: 0px;
			max-width: 280px;
		}
	}
`
export const InputCount = styled.input`
	@media (min-width: 1200px) {
		display: none;
	}
`
