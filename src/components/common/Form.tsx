import {useRouter} from "next/router";
import {ChangeEvent, MouseEvent, useEffect, useState} from "react"
import {connect} from "react-redux";
import {IFormData, updateMainForm, updateHeaderToogle, ICurrencyData} from "../../redux/mainFormReducer";
import {Button} from "./Button";
import {FormNotification} from "./FormNotification";
import {MainForm, MainInput, MainInputWrapper, MainSelect, SButtonWrapper, SelectForm, SelectInputWrapper, SelectPageInput, SelectPageSelect, SelectPageSelectCurrency, SFormElement, SInputDisabled, SLabel} from "./styles/Form.styled";

interface FormProps {
	formData: IFormData
	select?: boolean
	mobile?: boolean
	headerActiveToogle: boolean
	updateMainForm: (formData: IFormData) => ({type: string, payload: IFormData})
	updateHeaderToogle: (status: boolean) => ({type: string, payload: boolean})
	currencyData: ICurrencyData[]
	cities: string[]
}


const Form = ({formData, select, updateMainForm, headerActiveToogle, updateHeaderToogle, currencyData, cities}: FormProps) => {
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

	const fromChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFrom(e.target.value)
	}
	const toChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setTo(e.target.value)
	}
	const currencyChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		const currencyKey = e.target.value
		currencyData.forEach(k => {
			if (k.currency.toUpperCase() === currencyKey) {
				setCurrency(k.currency.toUpperCase())
				setCost(k.cost)
				setSign(k.sign)
			}
		});
	}

	let mainHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({from, to, currency, cost, sign})
		router.push({pathname: '/select'})
	}
	let selectHandleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		updateMainForm({from, to, currency, cost, sign})
		updateHeaderToogle(!headerActiveToogle)
	}
	let onClick = mainHandleSubmit;

	let CurrentSelect: typeof MainSelect = MainSelect
	let CurrentInput: typeof MainInput = MainInput
	let CurrentInputWrapper: typeof MainInputWrapper = MainInputWrapper
	let CurrentForm: typeof MainForm = MainForm
	if (select) {
		CurrentSelect = SelectPageSelect
		CurrentInput = SelectPageInput
		CurrentInputWrapper = SelectInputWrapper
		CurrentForm = SelectForm
		onClick = selectHandleSubmit
	}

	return (
		<>
			<CurrentForm action="">
				<SFormElement>
					{!select && <SLabel htmlFor="from">Откуда</SLabel>}
					<CurrentInputWrapper>
						<CurrentInput
							type="text"
							name="from"
							id="from"
							required
							value={from}
							onChange={fromChangeHandler}
						/>
					</CurrentInputWrapper>
				</SFormElement>
				<SFormElement>
					{!select && <SLabel htmlFor="to">Куда</SLabel>}
					<CurrentInputWrapper>
						<CurrentSelect
							name="to"
							id="to"
							value={to}
							onChange={toChangeHandler}
						>
							{cities.map((el, index) => <option key={index} value={el}>{el}</option>)}
						</CurrentSelect>
					</CurrentInputWrapper>
				</SFormElement>
				<SFormElement>
					{!select && <SLabel htmlFor="currency">Валюта</SLabel>}
					{!select ? <CurrentInputWrapper>
						<CurrentSelect
							name="currency"
							id="currency"
							value={currency}
							onChange={currencyChangeHandler}
						>
							{currencyData.map((el, index) => <option key={index} value={el.currency.toUpperCase()}>{el.currency.toUpperCase()}</option>)}
						</CurrentSelect>
					</CurrentInputWrapper>
						:
						<CurrentInputWrapper>
							<SelectPageSelectCurrency
								name="currency"
								id="currency"
								value={currency}
								onChange={currencyChangeHandler}
							>
								{currencyData.map((el, index) => <option key={index} value={el.currency.toUpperCase()}>{el.currency.toUpperCase()}</option>)}
							</SelectPageSelectCurrency>
						</CurrentInputWrapper>
					}
				</SFormElement>

				{!select && <SFormElement>
					<SLabel htmlFor="cost">Курс</SLabel>
					{!isDisable && <FormNotification
						content="Теперь нажмите на кнопку “Далее”"
						property="main down"
					/>}
					<CurrentInputWrapper>
						<SInputDisabled
							name="cost"
							id="cost"
							value={cost}
							disabled />
					</CurrentInputWrapper>
				</SFormElement>}

				<SButtonWrapper>
					<Button
						icon="arrow"
						disabled={isDisable}
						type='submit'
						property='next'
						onClick={onClick}
						content='Далее'
						select={select}
					/>
					<Button
						disabled={isDisable}
						type='submit'
						property='next'
						mobile={true}
						onClick={onClick}
						content='Выбрать мебель'
					/>
				</SButtonWrapper>
				{isDisable && !select && <FormNotification
					content="Для начала заполните поля выше"
					property="main up"
				/>}
			</CurrentForm>
		</>
	)
}

const mapStateToProps = (state: any) => ({
	formData: state.mainForm.formData,
	currencyData: state.mainForm.currencyData,
	cities: state.mainForm.cities,
	headerActiveToogle: state.mainForm.headerActiveToogle
})
export default connect(mapStateToProps, {updateMainForm, updateHeaderToogle})(Form)