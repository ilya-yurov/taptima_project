import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import SearchBarDesktop from './SearchBarDesktop/SearchBarDesktop'
import SearchBarMobile from './SearchBarMobile/SearchBarMobile'

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

interface SearchBarProps {
	placeholder: string
	buttonText?: any
	disabled: boolean
	setFilter: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ placeholder, buttonText, disabled, setFilter }: SearchBarProps) => {
	return (
		<>
			<MobileWrapper>
				<SearchBarMobile placeholder={placeholder} disabled={disabled} setFilter={setFilter} />
			</MobileWrapper>
			<DesktopWrapper>
				<SearchBarDesktop buttonText={buttonText} placeholder={placeholder} disabled={disabled} setFilter={setFilter} />
			</DesktopWrapper>
		</>
	)
}

export default SearchBar
