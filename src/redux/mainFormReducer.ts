const UPDATE_FORM = 'UPDATE_FORM'
const UPDATE_TOOGLE = 'UPDATE_TOOGLE'

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

interface IInitialState {
	formData: IFormData
	currencyData: ICurrencyData[]
	cities: string[]
	headerActiveToogle: boolean
}

interface IUpdateMainForm {
	type: 'UPDATE_FORM'
	payload: IFormData
}

interface IUpdateHeaderToogle {
	type: 'UPDATE_TOOGLE'
	payload: boolean
}

type Action = IUpdateMainForm | IUpdateHeaderToogle

const initialState: IInitialState = {
	formData: {
		from: '',
		to: 'Москва',
		currency: 'USD',
		cost: '60,38',
		sign: '$'
	},
	currencyData : [
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
		}
	],
	cities: ['Москва', 'Крым', 'Омск'],
	headerActiveToogle: false
}

const mainFormReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case UPDATE_FORM:
			return {
				...state,
				formData: action.payload
			}
		case UPDATE_TOOGLE:
			return {
				...state,
				headerActiveToogle: action.payload
			}
		default:
			return state
	}
}

export const updateMainForm = (formData:IFormData) => ({type: UPDATE_FORM, payload: formData})
export const updateHeaderToogle = (newStatus: boolean) => ({type: UPDATE_TOOGLE, payload: newStatus})

export default mainFormReducer