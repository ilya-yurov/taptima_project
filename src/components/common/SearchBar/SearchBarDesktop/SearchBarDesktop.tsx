import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../../Button/Button'
import { FormNotification } from '../../FormNotification/FormNotification'
import { SearchForm, SearchInput } from './SearchBarDesktop.styled'

interface SearchBarProps {
	placeholder: string
	buttonText: any
	disabled: boolean
	setFilter: Dispatch<SetStateAction<string>>
}

const SearchBarDesktop = ({ placeholder, buttonText, disabled, setFilter }: SearchBarProps) => {
	const [value, setValue] = useState('')
	const [note, setNote] = useState(true)
	useEffect(() => {
		if (disabled) {
			setNote(false)
		}
	}, [disabled])
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	let handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		setFilter(value)
	}
	return (
		<SearchForm action=''>
			<SearchInput disabled={disabled} name='search' id='search' type='text' placeholder={placeholder} value={value} onChange={onChangeHandler} />
			<Button disabled={disabled} content={buttonText} property='search' type='submit' onClick={handleSubmit} width='114px' height='53px' />
			{note && <FormNotification content='Введите название мебели в строку поиска или выберите мебель из предложенного списка' property='search' />}
		</SearchForm>
	)
}

export default SearchBarDesktop
