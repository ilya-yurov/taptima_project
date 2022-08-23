import styled from '@emotion/styled'

export const GoodWrapper = styled.div`
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
export const GoodCountWrapper = styled(GoodWrapper)`
	grid-area: count;
`
export const GoodNettoWrapper = styled(GoodWrapper)`
	grid-area: netto;
`
export const GoodBruttoWrapper = styled(GoodWrapper)`
	grid-area: brutto;
`
export const GoodValueWrapper = styled(GoodWrapper)`
	grid-area: value;
`
