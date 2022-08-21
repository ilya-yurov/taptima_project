import {useTheme} from '@emotion/react'
import { useRouter } from 'next/router'
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { ICurrencyData, IFormData } from '../../../../redux/mainFormReducer'
import { Button } from '../../Button'
import { FormNotification } from '../../FormNotification'
import { DesktopButtonWrapper, MainFormWrapper, MainInput, MainInputWrapper, MainSelect, MobileButtonWrapper, SButtonWrapper, SFormElement, SInputDisabled, SLabel } from './MainForm.styled'

interface FormProps {
	formData: IFormData
	updateMainForm: (formData: IFormData) => { type: string; payload: IFormData }
	currencyData: ICurrencyData[]
	cities: string[]
}

const MainForm = ({ formData, updateMainForm, currencyData, cities }: FormProps) => {
	const [from, setFrom] = useState(formData.from)
	const [to, setTo] = useState(formData.to)
	const [currency, setCurrency] = useState(formData.currency)
	const [sign, setSign] = useState(formData.sign)
	const [cost, setCost] = useState(formData.cost)
	const [isDisable, setIsDisable] = useState(true)
	const router = useRouter()
	const theme = useTheme()
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
	let mainHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({ from, to, currency, cost, sign })
		router.push({ pathname: '/select' })
	}
	return (
		<>
			<MainFormWrapper action=''>
				<SFormElement>
					<SLabel htmlFor='from'>Откуда</SLabel>
					<MainInputWrapper>
						<MainInput type='text' name='from' id='from' required value={from} onChange={fromChangeHandler} />
					</MainInputWrapper>
				</SFormElement>
				<SFormElement>
					<SLabel htmlFor='to'>Куда</SLabel>
					<MainInputWrapper>
						<MainSelect name='to' id='to' value={to} onChange={toChangeHandler}>
							{cities.map((el, index) => (
								<option key={index} value={el}>
									{el}
								</option>
							))}
						</MainSelect>
					</MainInputWrapper>
				</SFormElement>
				<SFormElement>
					<SLabel htmlFor='currency'>Валюта</SLabel>
					<MainInputWrapper>
						<MainSelect name='currency' id='currency' value={currency} onChange={currencyChangeHandler}>
							{currencyData.map((el, index) => (
								<option key={index} value={el.currency.toUpperCase()}>
									{el.currency.toUpperCase()}
								</option>
							))}
						</MainSelect>
					</MainInputWrapper>
				</SFormElement>
				<SFormElement>
					<SLabel htmlFor='cost'>Курс</SLabel>
					{!isDisable && <FormNotification content='Теперь нажмите на кнопку “Далее”' property='main down' />}
					<MainInputWrapper>
						<SInputDisabled name='cost' id='cost' value={cost} disabled />
					</MainInputWrapper>
				</SFormElement>
				<SButtonWrapper>
					<DesktopButtonWrapper>
						<Button width='163px' height='60px' bg={theme.colors.primary} icon='arrow' disabled={isDisable} type='submit' property='next' onClick={mainHandleSubmit} content='Далее' />
					</DesktopButtonWrapper>
					<MobileButtonWrapper>
						<Button disabled={isDisable} type='submit' property='next' onClick={mainHandleSubmit} content='Выбрать мебель' />
					</MobileButtonWrapper>
				</SButtonWrapper>
				{isDisable && <FormNotification content='Для начала заполните поля выше' property='main up' />}
			</MainFormWrapper>
		</>
	)
}

export default MainForm
