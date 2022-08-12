import styled from "@emotion/styled"
import {ChangeEvent, MouseEvent, useState} from "react"
import {Button} from "./Button"

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
`


interface SearchBarProps {
	placeholder: string
	buttonText: string
}

const SearchBar = ({placeholder, buttonText}:SearchBarProps) => {

	const [value, setValue] = useState('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	let handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
	}

	return (
		<SearchForm action="">
			<SearchInput
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
			/>
			<Button
				content={buttonText}
				property='search'
				type='submit'
				onClick={handleSubmit}
			/>
		</SearchForm>
	)
}

export default SearchBar