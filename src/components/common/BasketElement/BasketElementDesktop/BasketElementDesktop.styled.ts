import styled from '@emotion/styled'

export const DesktopElementWrapper = styled.article`
	display: grid;
	grid-template-columns: 120px 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-template-areas: 'img description count netto brutto value cost delete';
	justify-content: center;
	align-items: center;
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	color: #606f7a;
	background-color: #f8faff;
	border: 1px solid #e2e4ea;
	border-radius: 5px;
	p {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		border-right: 1px solid #e2e4ea;
		button {
			background-color: #f8faff;
		}
		&:last-child {
			border: none;
		}
	}
	input {
		background-color: #f8faff;
		text-align: center;
		font-weight: 400;
		font-size: 15px;
		line-height: 23px;
		color: #606f7a;
	}
`

export const GoodInfo = styled.p`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	&:hover {
		background: url('/other/edit_basket.png') 150px center no-repeat;
	}
`

export const MobileElementWrapper = styled.article`
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
			font-weight: 600;
			line-height: 18px;
			color: #606f7a;
		}
	}
`

export const GoodImg = styled.img`
	width: 119px;
	height: 96px;
	@media (max-width: 1200px) {
		width: 108px;
	}
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

export const GoodImgWrapper = styled.div`
	grid-area: img;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
`
export const GoodDescriptionWrapper = styled.div`
	grid-area: description;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
`
export const GoodCountWrapper = styled.div`
	grid-area: count;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	&:hover {
		background: url('/other/edit_basket.png') 150px center no-repeat;
	}
`
export const GoodNettoWrapper = styled.div`
	grid-area: netto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	&:hover {
		background: url('/other/edit_basket.png') 150px center no-repeat;
	}
`
export const GoodBruttoWrapper = styled.div`
	grid-area: brutto;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	&:hover {
		background: url('/other/edit_basket.png') 150px center no-repeat;
	}
`
export const GoodValueWrapper = styled.div`
	grid-area: value;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	&:hover {
		background: url('/other/edit_basket.png') 150px center no-repeat;
	}
`
export const GoodCostWrapper = styled.div`
	grid-area: cost;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
`
export const GoodDeleteWrapper = styled.div`
	grid-area: delete;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-right: 1px solid #e2e4ea;
	button {
		background-color: inherit;
	}
`

export const DescriptionWrapper = styled.section`
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
			font-weight: 600;
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
