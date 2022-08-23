import { useTheme } from '@emotion/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { SearchForm, SearchInput } from './SearchBarMobile.styled'

interface SearchBarProps {
	placeholder: string
	buttonText?: any
	disabled: boolean
	setFilter: Dispatch<SetStateAction<string>>
}

const SearchBarMobile = ({ placeholder, disabled, setFilter }: SearchBarProps) => {
	const [value, setValue] = useState('')
	const theme = useTheme()
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		setFilter(e.target.value)
	}
	return (
		<SearchForm action=''>
			<SearchInput fw={theme.weight.secondary} disabled={disabled} name='search' id='search' type='text' placeholder={placeholder} value={value} onChange={onChangeHandler} />
		</SearchForm>
	)
}

export default SearchBarMobile
