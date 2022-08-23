//Styles definitions

import styled from '@emotion/styled'

export const MobileButtonWrapper = styled.section`
	margin: 0px auto;
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopButtonWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
	}
`
export const MainFormWrapper = styled.form`
	position: relative;
	display: flex;
	justify-items: center;
	align-items: end;
	margin-top: '48px';
	max-width: 700px;
	@media (max-width: 1200px) {
		margin-top: 10px;
		margin-right: -10px;
		max-width: 320px;
		gap: 10px;
		flex-wrap: wrap;
	}
`
export const SButtonWrapper = styled.div`
	margin-left: 12px;
	@media (max-width: 1200px) {
		margin-left: 0px;
		margin-top: 14px;
	}
`
