import {ChangeEvent, MouseEvent, useState} from "react"
import {Button} from "./Button";

//Data definitions
const currency = {
	usd: {
		cost: '60,38',
		symbol: '$',
	},
	rub: {
		cost: '-',
		symbol: '₽',
	},
	cny: {
		cost: '8,95',
		symbol: '¥',
	}
}

const cities = ['Москва', 'Владивосток', 'Омск']

function typedKeys<T>(o: T): (keyof T)[] {
	// type cast should be safe because that's what really Object.keys() does
	return Object.keys(o) as (keyof T)[];
}

const Form = () => {

	const [from, setFrom] = useState('')
	const [to, setTo] = useState('Москва')
	const [currentCurrency, setCurrentCurrency] = useState('USD')
	const [cost, setCost] = useState('60,38')

	const [isEnable, setIsEnable] = useState(true)

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
	}

	return (
		<>
			<form action="">
				<div>
					<label htmlFor="from">Откуда</label>
					<div>
						<input
							type="text"
							name="from"
							id="from"
							required
							value={from}
							onChange={fromChangeHandler}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="to">Куда</label>
					<div>
						<select
							name="to"
							id="to"
							value={to}
							onChange={toChangeHandler}
						>
							{cities.map((el, index) => <option key={index} value={el}>{el}</option>)}
						</select>
					</div>
				</div>
				<div>
					<label htmlFor="currency">Валюта</label>
					<div>
						<select
							name="currency"
							id="currency"
							value={currentCurrency}
							onChange={currencyChangeHandler}
						>
							{Object.keys(currency).map((el, index) => <option key={index} value={el.toUpperCase()}>{el.toUpperCase()}</option>)}
						</select>
					</div>
				</div>

				<div>
					<label htmlFor="cost">Курс</label>
					<div>
						<input
							name="cost"
							id="cost"
							value={cost}
							disabled />
					</div>
				</div>

				<Button
				width="163px"
				height="67px"
				color="white"
				bgc="#5DAAFF"
				icon="arrow"
					mq={true}
					disabled={isEnable}
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
					disabled={isEnable}
					type='submit'
					onClick={handleSubmit}
					content='Выбрать мебель'
				/>
			</form>
		</>
	)
}
export default Form