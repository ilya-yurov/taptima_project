import { useTheme } from '@emotion/react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import {ICurrencyData} from '../../../../../store/mainForm'
import { SelectInputWrapper, SelectPageInput, SelectPageSelect, SelectPageSelectCurrency, SFormElement } from './SelectFormElements.styled'

interface SelectFormElementsProps {
	currencyData: ICurrencyData[]
	cities: string[]
	from: string
	to: string
	currency: string
	setFrom: Dispatch<SetStateAction<string>>
	setTo: Dispatch<SetStateAction<string>>
	setCurrency: Dispatch<SetStateAction<string>>
	setCost: Dispatch<SetStateAction<string>>
	setSign: Dispatch<SetStateAction<string>>
}

const SelectFormElements = ({ setFrom, setTo, setCurrency, setCost, setSign, currencyData, from, to, currency, cities }: SelectFormElementsProps) => {
	const theme = useTheme()
	const fromChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFrom(e.target.value)
	}
	const toChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setTo(e.target.value)
	}
	const currencyChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const currencyKey = e.target.value
		currencyData.forEach((k) => {
			if (k.currency.toUpperCase() === currencyKey) {
				setCurrency(k.currency.toUpperCase())
				setCost(k.cost)
				setSign(k.sign)
			}
		})
	}
	return (
		<>
			<SFormElement>
				<SelectInputWrapper>
					<SelectPageInput fw={theme.weight.tertiary} ff={theme.fonts.secondary} type='text' name='from' id='from' required value={from} onChange={fromChangeHandler} />
				</SelectInputWrapper>
			</SFormElement>
			<SFormElement>
				<SelectInputWrapper>
					<SelectPageSelect fw={theme.weight.tertiary} ff={theme.fonts.secondary} name='to' id='to' value={to} onChange={toChangeHandler}>
						{cities.map((el, index) => (
							<option key={index} value={el}>
								{el}
							</option>
						))}
					</SelectPageSelect>
				</SelectInputWrapper>
			</SFormElement>
			<SFormElement>
				<SelectInputWrapper>
					<SelectPageSelectCurrency fw={theme.weight.tertiary} ff={theme.fonts.secondary} name='currency' id='currency' value={currency} onChange={currencyChangeHandler}>
						{currencyData.map((el, index) => (
							<option key={index} value={el.currency.toUpperCase()}>
								{el.currency.toUpperCase()}
							</option>
						))}
					</SelectPageSelectCurrency>
				</SelectInputWrapper>
			</SFormElement>
		</>
	)
}

export default SelectFormElements
