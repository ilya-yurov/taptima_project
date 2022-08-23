import styled from '@emotion/styled'

export const NumberSelectionWrapper = styled.article`
	position: relative;
	display: flex;
	max-width: 404px;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 119px;
	gap: 24px;
	@media (max-width: 1200px) {
		margin-left: 0px;
		margin-top: 27px;
	}
`
export const SelectionHeader = styled.header`
	display: flex;
	align-items: center;
	background-color: #f8faff;
	min-width: 404px;
	border-radius: 3px;
	img {
		width: 108px;
		height: 70px;
	}
	p {
		font-size: 17px;
		line-height: 17px;
		color: #606f7a;
		width: 100%;
		text-align: center;
	}
	@media (max-width: 1200px) {
		margin-left: 0px;
		min-width: 280px;
	}
`
export const NumberWrapper = styled.section`
	display: flex;
	align-items: center;
	gap: 35px;
	header {
		font-size: 15px;
		color: #606f7a;
	}
`
export const ButtonSection = styled.section`
	display: flex;
	width: 159px;
	height: 53px;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 3px;
	p {
		background-color: white;
		img {
			background: #ffffff;
		}
		button {
			display: flex;
			justify-content: center;
			align-items: center;
			background: #ffffff;
			height: 15px;
			width: 15px;
		}
		width: 53px;
		height: 53px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		color: #606f7a;
	}
`
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
			min-width: 334px;
		}
	}
`
export const ButtonsWrapper = styled.section`
	display: flex;
	gap: 9px;
	margin-top: 21px;
	@media (max-width: 1200px) {
		flex-direction: column;
		flex-wrap: 1;
	}
`
