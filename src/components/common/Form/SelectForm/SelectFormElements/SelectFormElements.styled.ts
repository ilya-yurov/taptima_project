import styled from '@emotion/styled'

export const SelectInputWrapper = styled.div`
	background-color: #ffffff;
	min-width: 150px;
	min-height: 45px;
	display: flex;
	@media (max-width: 1200px) {
	}
`
export const SelectPageInput = styled.input`
	text-align: center;
	flex: 1;
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	color: #606f7a;
	display: inline-block;
	background: url('/other/divider_small_input.png') right center no-repeat;
	&:focus {
		color: #b7b7b7;
	}
	@media (max-width: 1200px) {
		width: 162px;
		height: 49px;
		background: none;
	}
`
export const SelectPageSelect = styled.select`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	width: 100%;
	text-align: center;
	color: #606f7a;
	background: url('/other/divider_small_input.png'), url('/other/mark_input.png');
	background-position: right center, 110px center;
	background-repeat: no-repeat, no-repeat;
	& last-child {
		font-size: 50px;
	}
	@media (max-width: 1200px) {
		width: 162px;
		height: 49px;
		background: none;
	}
`
export const SelectPageSelectCurrency = styled.select`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	width: 100%;
	text-align: center;
	color: #606f7a;
	background: url('/other/mark_input.png');
	background-position: 110px center;
	background-repeat: no-repeat;
	@media (max-width: 1200px) {
		width: 162px;
		height: 49px;
		background: none;
	}
`
export const SFormElement = styled.div``
