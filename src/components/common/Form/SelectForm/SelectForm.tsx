import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { ICurrencyData, IFormData } from '../../../../redux/mainFormReducer'
import { Button } from '../../Button'
import {
	SelectFormWrapper,
	SButtonWrapper,
	SelectInputWrapper,
	SelectPageInput,
	SelectPageSelect,
	SelectPageSelectCurrency,
	SFormElement,
	MobileButtonWrapper,
	DesktopButtonWrapper,
} from './SelectForm.styled'

interface FormProps {
	formData: IFormData
	headerActiveToogle: boolean
	updateMainForm: (formData: IFormData) => { type: string; payload: IFormData }
	updateHeaderToogle: (status: boolean) => { type: string; payload: boolean }
	currencyData: ICurrencyData[]
	cities: string[]
}

const SelectForm = ({ formData, updateMainForm, headerActiveToogle, updateHeaderToogle, currencyData, cities }: FormProps) => {
	const [from, setFrom] = useState(formData.from)
	const [to, setTo] = useState(formData.to)
	const [currency, setCurrency] = useState(formData.currency)
	const [sign, setSign] = useState(formData.sign)
	const [cost, setCost] = useState(formData.cost)
	const [isDisable, setIsDisable] = useState(true)
	useEffect(() => {
		if (from.trim().length === 0) {
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}, [from])
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
	let selectHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({ from, to, currency, cost, sign })
		updateHeaderToogle(!headerActiveToogle)
	}
	return (
		<>
			<SelectFormWrapper action=''>
				<SFormElement>
					<SelectInputWrapper>
						<SelectPageInput type='text' name='from' id='from' required value={from} onChange={fromChangeHandler} />
					</SelectInputWrapper>
				</SFormElement>
				<SFormElement>
					<SelectInputWrapper>
						<SelectPageSelect name='to' id='to' value={to} onChange={toChangeHandler}>
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
						<SelectPageSelectCurrency name='currency' id='currency' value={currency} onChange={currencyChangeHandler}>
							{currencyData.map((el, index) => (
								<option key={index} value={el.currency.toUpperCase()}>
									{el.currency.toUpperCase()}
								</option>
							))}
						</SelectPageSelectCurrency>
					</SelectInputWrapper>
				</SFormElement>
				<SButtonWrapper>
					<MobileButtonWrapper>
						<Button icon='arrow' disabled={isDisable} type='submit' property='next' onClick={selectHandleSubmit} content='Далее' />
					</MobileButtonWrapper>
					<DesktopButtonWrapper>
						<Button disabled={isDisable} type='submit' property='next' onClick={selectHandleSubmit} content='Выбрать мебель' />
					</DesktopButtonWrapper>
				</SButtonWrapper>
			</SelectFormWrapper>
		</>
	)
}

export default SelectForm
