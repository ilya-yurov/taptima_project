import styled from "@emotion/styled";

export const NumberSelectionWrapper = styled.article`
	display: flex;
	max-width: 404px;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 119px;
	gap: 24px;
`
	export const SelectionHeader = styled.header`
		display: flex;
		align-items: center;
		background-color: #F8FAFF;
		min-width: 404px;
		border-radius: 3px;
		img {
			width: 108px;
			height: 70px;
		}
		p {
			font-family: 'OpenSans';
			font-style: normal;
			font-weight: 400;
			font-size: 17px;
			line-height: 17px;
			color: #606F7A;
			width: 100%;
			text-align: center;
		}
	`

	export const NumberWrapper = styled.section`
		display: flex;
		align-items: center;
		gap: 35px;
		header {
			font-family: 'OpenSans';
			font-style: normal;
			font-weight: 400;
			font-size: 15px;
			line-height: 15px;
			color: #606F7A;
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
				font-family: 'OpenSans';
				font-style: normal;
				font-weight: 400;
				font-size: 15px;
				line-height: 15px;
				color: #606F7A;
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
				font-family: 'OpenSans';
				font-style: normal;
				font-weight: 400;
				font-size: 15px;
				line-height: 15px;
				color: #606F7A;
				box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
				border-radius: 3px;
				&:disabled {
					background-color: white;
				}
			}
	`
	export const ButtonsWrapper = styled.section`
		display: flex;
		gap: 9px;
		margin-top: 21px;
	`