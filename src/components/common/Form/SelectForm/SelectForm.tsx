import { MouseEvent, useEffect, useState } from 'react'
import { ICurrencyData, IFormData } from '../../../../redux/mainFormReducer'
import { Button } from '../../Button/Button'
import { SelectFormWrapper, SButtonWrapper, MobileButtonWrapper, DesktopButtonWrapper } from './SelectForm.styled'
import SelectFormElements from './SelectFormElements/SelectFormElements'

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
	let selectHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({ from, to, currency, cost, sign })
		updateHeaderToogle(!headerActiveToogle)
	}
	return (
		<>
			<SelectFormWrapper action=''>
				<SelectFormElements
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
				/>
				<SButtonWrapper>
					<MobileButtonWrapper>
						<Button icon='arrow' disabled={isDisable} type='submit' property='next' onClick={selectHandleSubmit} content='Далее' />
					</MobileButtonWrapper>
					<DesktopButtonWrapper>
						<Button disabled={isDisable} width='124px' height='45px' type='submit' property='next' onClick={selectHandleSubmit} content='Сохранить' />
					</DesktopButtonWrapper>
				</SButtonWrapper>
			</SelectFormWrapper>
		</>
	)
}

export default SelectForm
