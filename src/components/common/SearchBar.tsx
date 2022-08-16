import {ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react"
import {Button} from "./Button"
import {FormNotification} from "./FormNotification"
import {SearchForm, SearchInput} from "./styles/SearchBar.styled"

interface SearchBarProps {
	placeholder: string
	buttonText?: any
	disabled: boolean
	setFilter: Dispatch<SetStateAction<string>>
	mobile?: boolean
}

const SearchBar = ({placeholder, buttonText, disabled, setFilter, mobile}: SearchBarProps) => {

	const [value, setValue] = useState('')
	const [note, setNote] = useState(true)
	useEffect(() => {
		if (disabled) {
			setNote(false)
		}
	}, [disabled])

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		if (mobile)
			setFilter(e.target.value)
	}

	let handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		setFilter(value)
	}

	return (
		<SearchForm action="">
			<SearchInput
				disabled={disabled}
				name="search"
				id="search"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
			/>
			{!mobile &&
				<Button
					disabled={disabled}
					content={buttonText}
					property='search'
					type='submit'
					onClick={handleSubmit}
				/>}
			{note &&
				<FormNotification
					content="Введите название мебели в строку поиска или выберите мебель из предложенного списка"
					property="search"
				/>}
		</SearchForm>
	)
}

export default SearchBar