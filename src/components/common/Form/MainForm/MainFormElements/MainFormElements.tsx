import { useTheme } from '@emotion/react'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import {ICurrencyData} from '../../../../../store/mainForm'
import { FormNotification } from '../../../FormNotification/FormNotification'
import { SFormElement, MainInput, MainInputWrapper, MainSelect, SInputDisabled, SLabel } from './MainFormElements.styled'

interface FormElementsProps {
	currencyData: ICurrencyData[]
	cities: string[]
	from: string
	to: string
	currency: string
	cost: string
	setFrom: Dispatch<SetStateAction<string>>
	setTo: Dispatch<SetStateAction<string>>
	setCurrency: Dispatch<SetStateAction<string>>
	setCost: Dispatch<SetStateAction<string>>
	setSign: Dispatch<SetStateAction<string>>
	isDisable: boolean
}

const FormElements = ({ setFrom, setTo, setCurrency, setCost, setSign, currencyData, from, to, currency, cities, isDisable, cost }: FormElementsProps) => {
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
				<SLabel fw={theme.weight.tertiary} ff={theme.fonts.secondary} htmlFor='from'>
					Откуда
				</SLabel>
				<MainInputWrapper>
					<MainInput fw={theme.weight.tertiary} ff={theme.fonts.secondary} type='text' name='from' id='from' required value={from} onChange={fromChangeHandler} />
				</MainInputWrapper>
			</SFormElement>
			<SFormElement>
				<SLabel fw={theme.weight.tertiary} ff={theme.fonts.secondary} htmlFor='to'>
					Куда
				</SLabel>
				<MainInputWrapper>
					<MainSelect fw={theme.weight.tertiary} ff={theme.fonts.secondary} name='to' id='to' value={to} onChange={toChangeHandler}>
						{cities.map((el, index) => (
							<option key={index} value={el}>
								{el}
							</option>
						))}
					</MainSelect>
				</MainInputWrapper>
			</SFormElement>
			<SFormElement>
				<SLabel fw={theme.weight.tertiary} ff={theme.fonts.secondary} htmlFor='currency'>
					Валюта
				</SLabel>
				<MainInputWrapper>
					<MainSelect fw={theme.weight.tertiary} ff={theme.fonts.secondary} name='currency' id='currency' value={currency} onChange={currencyChangeHandler}>
						{currencyData.map((el, index) => (
							<option key={index} value={el.currency.toUpperCase()}>
								{el.currency.toUpperCase()}
							</option>
						))}
					</MainSelect>
				</MainInputWrapper>
			</SFormElement>
			<SFormElement>
				<SLabel fw={theme.weight.tertiary} ff={theme.fonts.secondary} htmlFor='cost'>
					Курс
				</SLabel>
				{!isDisable && <FormNotification content='Теперь нажмите на кнопку “Далее”' property='main down' />}
				<MainInputWrapper>
					<SInputDisabled fw={theme.weight.tertiary} ff={theme.fonts.secondary} name='cost' id='cost' value={cost} disabled />
				</MainInputWrapper>
			</SFormElement>
		</>
	)
}

export default FormElements
