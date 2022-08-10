import styled from "@emotion/styled";
import {ChangeEvent, MouseEvent, useEffect, useState} from "react"
import {Button} from "./Button";
import {FormNotification} from "./FormNotification";


//Data definitions
const currency = {
	usd: {
		cost: '60,38',
		symbol: '$',
	},
	cny: {
		cost: '8,95',
		symbol: '¥',
	},
	rub: {
		cost: '-',
		symbol: '₽',
	}
}

const cities = ['Москва', 'Крым', 'Омск']

function typedKeys<T>(o: T): (keyof T)[] {
	// type cast should be safe because that's what really Object.keys() does
	return Object.keys(o) as (keyof T)[];
}


//Styles definitions
const SForm = styled.form`
	position: relative;
	display: flex;
	justify-items: center;
	align-items: end;
	margin-top: 48px;
	max-width: 700px;
`
const SLabel = styled.label`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	color: #B7B7B7;
	display: inline-block;
	margin-bottom: 16px;
`
const SInputWrapper = styled.div`
	background-color: #FFFFFF;
	min-width: 135px;
	min-height: 67px;
	display: flex;
`
const SButtonWrapper = styled.div`
	margin-left: 12px;
`
const SFormElement = styled.div`

`
const SInput = styled.input`
	text-align: center;
	flex: 1;
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	color: #606F7A;
	display: inline-block;
	background: url('/divider_input.png') right center no-repeat;
`
const SInputDisabled = styled.input`
	text-align: center;
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	background-color: #FFFFFF;
	flex: 1;
	color: #B7B7B7;
`
const SSelect = styled.select`
	font-family: 'Roboto';
	font-weight: 500;
	font-size: 15px;
	line-height: 15px;
	width: 100%;
	text-align: center;
	color: #606F7A;
	background: url('/divider_input.png'), url('/mark_input.png'); right center no-repeat;
	background-position: right center, 100px center;
	background-repeat: no-repeat, no-repeat;
	}
`




const Form = () => {

	const [from, setFrom] = useState('')
	const [to, setTo] = useState('Москва')
	const [currentCurrency, setCurrentCurrency] = useState('USD')
	const [cost, setCost] = useState('60,38')

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
		typedKeys(currency).forEach(k => {
			if (k.toUpperCase() === currencyKey) {
				setCurrentCurrency(k.toUpperCase())
				setCost(currency[k].cost)
			}
		});
	}

	const handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		alert('Submit!')
	}

	return (
		<>
			<SForm action="">
				<SFormElement>
					<SLabel htmlFor="from">Откуда</SLabel>
					<SInputWrapper>
						<SInput
							type="text"
							name="from"
							id="from"
							required
							value={from}
							onChange={fromChangeHandler}
						/>
					</SInputWrapper>
				</SFormElement>
				<SFormElement>
					<SLabel htmlFor="to">Куда</SLabel>
					<SInputWrapper>
						<SSelect
							name="to"
							id="to"
							value={to}
							onChange={toChangeHandler}
						>
							{cities.map((el, index) => <option key={index} value={el}>{el}</option>)}
						</SSelect>
					</SInputWrapper>
				</SFormElement>
				<SFormElement>
					<SLabel htmlFor="currency">Валюта</SLabel>

					<SInputWrapper>
						<SSelect
							name="currency"
							id="currency"
							value={currentCurrency}
							onChange={currencyChangeHandler}
						>
							{Object.keys(currency).map((el, index) => <option key={index} value={el.toUpperCase()}>{el.toUpperCase()}</option>)}
						</SSelect>
					</SInputWrapper>
				</SFormElement>

				<SFormElement>
					<SLabel htmlFor="cost">Курс</SLabel>
					{!isDisable && <FormNotification
						content="Теперь нажмите на кнопку “Далее”"
						arrow="down"
						top="-25px"
						right="-107px"
					/>}
					<SInputWrapper>
						<SInputDisabled
							name="cost"
							id="cost"
							value={cost}
							disabled />
					</SInputWrapper>
				</SFormElement>

				<SButtonWrapper>
					<Button
						width="163px"
						height="67px"
						color="white"
						bgc="#5DAAFF"
						icon="arrow"
						mq={true}
						bs={true}
						disabled={isDisable}
						type='submit'
						onClick={handleSubmit}
						content='Далее'
					/>
					<Button
						width="335px"
						height="55px"
						color="white"
						mq={false}
						bgc="#5DAAFF"
						disabled={isDisable}
						type='submit'
						onClick={handleSubmit}
						content='Выбрать мебель'
					/>
				</SButtonWrapper>
				{isDisable && <FormNotification
					content="Для начала заполните поля выше"
					top="130px"
					arrow="up"
				/>}
			</SForm>
			
		</>
	)
}
export default Form