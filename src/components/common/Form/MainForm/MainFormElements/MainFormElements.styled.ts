import styled from '@emotion/styled'

export const SFormElement = styled.div``
export const MainInput = styled.input<{ ff: string }>`
	text-align: center;
	flex: 1;
	font-family: ${({ ff }) => ff};
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	color: #606f7a;
	display: inline-block;
	background: url('/other/divider_input.png') right center no-repeat;
	@media (max-width: 1200px) {
		width: 135px;
		height: 49px;
		background: none;
	}
`
export const MainInputWrapper = styled.div`
	background-color: #ffffff;
	min-width: 135px;
	min-height: 60px;
	display: flex;
	@media (max-width: 1200px) {
		min-width: 135px;
		min-height: 49px;
	}
`
export const MainSelect = styled.select<{ ff: string }>`
	font-family: ${({ ff }) => ff};
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	width: 100%;
	text-align: center;
	color: #606f7a;
	background: url('/other/divider_input.png'), url('/other/mark_input.png');
	background-position: right center, 100px center;
	background-repeat: no-repeat, no-repeat;
	@media (max-width: 1200px) {
		width: 135px;
		height: 49px;
		background: none;
	}
`
export const SInputDisabled = styled.input<{ ff: string }>`
	text-align: center;
	font-family: ${({ ff }) => ff};
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	background-color: #ffffff;
	flex: 1;
	color: #b7b7b7;
	@media (max-width: 1200px) {
		width: 135px;
		height: 49px;
		align-self: center;
	}
`
export const SLabel = styled.label<{ ff: string }>`
	font-family: ${({ ff }) => ff};
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	color: #b7b7b7;
	display: inline-block;
	margin-bottom: 16px;
	@media (max-width: 1200px) {
		margin-bottom: 12px;
	}
`
