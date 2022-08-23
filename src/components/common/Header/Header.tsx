import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import { connect } from 'react-redux'
import { IFormData, updateMainForm, updateHeaderToogle } from '../../../redux/mainFormReducer'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import HeaderMobile from './HeaderMobile/HeaderMobile'

export const MobileWrapper = styled.section`
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
	}
`

interface HeaderProps {
	select?: boolean
	isNote?: boolean
	basket?: boolean
	main?: boolean
	disabled?: boolean | any
	setFilter?: Dispatch<SetStateAction<string>> | any
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status: boolean) => { type: string; payload: boolean }
}

const Header = (props: HeaderProps) => {
	const { select, formData, headerActiveToogle, updateHeaderToogle, isNote, setFilter, disabled, basket, main } = props
	return (
		<>
			<MobileWrapper>
				<HeaderMobile formData={formData} select={select} basket={basket} disabled={disabled} setFilter={setFilter} main={main} />
			</MobileWrapper>
			<DesktopWrapper>
				<HeaderDesktop select={select} isNote={isNote} headerActiveToogle={headerActiveToogle} basket={basket} formData={formData} updateHeaderToogle={updateHeaderToogle} />
			</DesktopWrapper>
		</>
	)
}
const mapStateToProps = (state: any) => ({
	formData: state.mainForm.formData,
	headerActiveToogle: state.mainForm.headerActiveToogle,
})

export default connect(mapStateToProps, { updateMainForm, updateHeaderToogle })(Header)
