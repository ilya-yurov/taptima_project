import { makeAutoObservable } from 'mobx'

export interface IFormData {
	from: string
	to: string
	currency: string
	cost: string
	sign: string
}

export interface ICurrencyData {
	currency: string
	cost: string
	sign: string
}

class MainForm {
	formData: IFormData = {
		from: '',
		to: 'Москва',
		currency: 'USD',
		cost: '60,38',
		sign: '$',
	}
	cost = 1
	currencyData: ICurrencyData[] = [
		{
			currency: 'usd',
			cost: '60,38',
			sign: '$',
		},
		{
			currency: 'cny',
			cost: '8,95',
			sign: '¥',
		},
		{
			currency: 'rub',
			cost: '-',
			sign: '₽',
		},
	]
	cities: string[] = ['Москва', 'Крым', 'Омск']
	headerActiveToogle: boolean = false
	updateForm = (formData: IFormData) => {
		console.log(this.formData.cost)
		this.formData = formData
	}
	updateToogle = (newStatus: boolean) => {
		this.headerActiveToogle = newStatus
	}
	constructor() {
		makeAutoObservable(this)
	}
}

export default new MainForm()
