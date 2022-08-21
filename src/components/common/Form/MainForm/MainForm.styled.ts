//Styles definitions

import styled from "@emotion/styled"


//! Common styles


export const SLabel = styled.label`
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
color: #B7B7B7;
display: inline-block;
margin-bottom: 16px;
@media (max-width: 1200px) {
	margin-bottom: 12px;
}
`
export const MainInputWrapper = styled.div`
background-color: #FFFFFF;
min-width: 135px;
min-height: 60px;
display: flex;
@media (max-width: 1200px) {
	min-width: 162px;
	min-height: 49px;
}
`
export const SButtonWrapper = styled.div`
margin-left: 12px;
@media (max-width: 1200px) {
margin-left: 0px;
margin-top: 14px;
}
`
export const SFormElement = styled.div`
`
export const MobileButtonWrapper = styled.section`
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopButtonWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
	}
`

export const SInputDisabled = styled.input`
text-align: center;
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
background-color: #FFFFFF;
flex: 1;
color: #B7B7B7;
@media (max-width: 1200px) {
	width: 162px;
	height: 49px;
	align-self: center;
}
`
//! Main page styles
export const MainFormWrapper = styled.form`
position: relative;
display: flex;
justify-items: center;
align-items: end;
margin-top: '48px';
max-width: 700px;
@media (max-width: 1200px) {
margin-top: 10px;
	max-width: 335px;
	gap: 10px;
	flex-wrap: wrap;
}
`

export const MainInput = styled.input`
text-align: center;
flex: 1;
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
color: #606F7A;
display: inline-block;
background: url('/other/divider_input.png') right center no-repeat;
@media (max-width: 1200px) {
	width: 162px;
	height: 49px;
	background: none;
}
`

export const MainSelect = styled.select`
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
width: 100%;
text-align: center;
color: #606F7A;
background: url('/other/divider_input.png'), url('/other/mark_input.png');
background-position: right center, 100px center;
background-repeat: no-repeat, no-repeat;
@media (max-width: 1200px) {
	width: 162px;
	height: 49px;
	background: none;
	}

`
//! Select page styles
export const SelectForm = styled.form`
position: relative;
display: flex;
justify-items: center;
align-items: end;
max-width: 700px;
margin-left: 60px;
@media (max-width: 1200px) {
	display: none;
}
`

export const SelectPageSelect = styled.select`
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
width: 100%;
text-align: center;
color: #606F7A;
background: url('/divider_small_input.png'), url('/mark_input.png');
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
color: #606F7A;
background: url('/mark_input.png');
background-position: 110px center;
background-repeat: no-repeat;
@media (max-width: 1200px) {
	width: 162px;
	height: 49px;
	background: none;
	}

`

export const SelectPageInput = styled.input`
text-align: center;
flex: 1;
font-family: 'Roboto';
font-weight: 500;
font-size: 15px;
line-height: 15px;
color: #606F7A;
display: inline-block;
background: url('/divider_small_input.png') right center no-repeat;
&:focus {
	color: #B7B7B7;
}
@media (max-width: 1200px) {
	width: 162px;
	height: 49px;
	background: none;
}
`

export const SelectInputWrapper = styled.div`
background-color: #FFFFFF;
min-width: 150px;
min-height: 45px;
display: flex;
@media (max-width: 1200px) {
}
`