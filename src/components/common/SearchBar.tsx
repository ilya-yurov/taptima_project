import styled from "@emotion/styled"
import {ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react"
import {Button} from "./Button"
import {FormNotification} from "./FormNotification"

const SearchForm = styled.form`
display: flex;
`
const SearchInput = styled.input`
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 15px;

	width: 370px;
	height: 53px;
	box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
	display: flex;
	justify-content: flex-start;
	margin-right: 8px;
	padding: 19px;
	@media (max-width: 1200px) {
		max-height: 22px;
		background: none;
		box-shadow: none;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 15px;
		color: #c2c3c4;
		border-bottom: 1.5px solid #c2c3c4;
		max-width: 204px;
		padding: 0px 5px 7px 0px;
		&::placeholder {
			color: #c2c3c4;
		}
	}
`


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