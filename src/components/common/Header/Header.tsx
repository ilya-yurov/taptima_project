import styled from '@emotion/styled'
import {observer} from 'mobx-react-lite'
import { Dispatch, SetStateAction } from 'react'
import mainForm from '../../../store/mainForm'
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
}

const Header = observer((props: HeaderProps) => {
	const { select, isNote, setFilter, disabled, basket, main } = props
	return (
		<>
			<MobileWrapper>
				<HeaderMobile formData={mainForm.formData} select={select} basket={basket} disabled={disabled} setFilter={setFilter} main={main} />
			</MobileWrapper>
			<DesktopWrapper>
				<HeaderDesktop
					select={select}
					isNote={isNote}
					headerActiveToogle={mainForm.headerActiveToogle}
					basket={basket}
					formData={mainForm.formData}
					updateHeaderToogle={mainForm.updateToogle}
				/>
			</DesktopWrapper>
		</>
	)
})

export default Header
