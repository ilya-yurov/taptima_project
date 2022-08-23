import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import { ICurrencyData, IFormData } from '../../../../redux/mainFormReducer'
import { Button } from '../../Button/Button'
import { FormNotification } from '../../FormNotification/FormNotification'
import FormElements from './MainFormElements/MainFormElements'
import { DesktopButtonWrapper, MainFormWrapper, MobileButtonWrapper, SButtonWrapper } from './MainForm.styled'

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
	useEffect(() => {
		if (from.trim().length === 0) {
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}, [from])
	let mainHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({ from, to, currency, cost, sign })
		router.push({ pathname: '/select' })
	}
	return (
		<>
			<MainFormWrapper action=''>
				<FormElements
					setFrom={setFrom}
					setTo={setTo}
					setCurrency={setCurrency}
					setCost={setCost}
					setSign={setSign}
					currencyData={currencyData}
					from={from}
					to={to}
					currency={currency}
					cities={cities}
					isDisable={isDisable}
					cost={cost}
				/>
				<SButtonWrapper>
					<DesktopButtonWrapper>
						<Button width='163px' height='60px' icon='arrow' disabled={isDisable} type='submit' property='next' onClick={mainHandleSubmit} content='Далее' />
					</DesktopButtonWrapper>
					<MobileButtonWrapper>
						<Button disabled={isDisable} type='submit' property='next' onClick={mainHandleSubmit} content='Выбрать мебель' width='280px' height='55px' />
					</MobileButtonWrapper>
				</SButtonWrapper>
				{isDisable && <FormNotification content='Для начала заполните поля выше' property='main up' />}
			</MainFormWrapper>
		</>
	)
}

export default MainForm
