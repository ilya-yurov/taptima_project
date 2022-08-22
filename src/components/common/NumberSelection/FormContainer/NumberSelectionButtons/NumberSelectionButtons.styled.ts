import styled from '@emotion/styled'

export const MobileButtonsWrapper = styled.section`
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopButtonsWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
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
