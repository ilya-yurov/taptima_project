import styled from '@emotion/styled'

export const SelectFormWrapper = styled.form`
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
export const SButtonWrapper = styled.div`
	margin-left: 12px;
	@media (max-width: 1200px) {
		margin-left: 0px;
		margin-top: 14px;
	}
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