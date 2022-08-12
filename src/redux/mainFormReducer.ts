
const UPDATE_FORM = 'UPDATE_FORM'
const UPDATE_TOOGLE = 'UPDATE_TOOGLE'

export interface IFormData {
	from: string
	to: string
	currency: string
	cost: string
	sign: string
}

interface IInitialState {
	formData: IFormData
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
		from: 'Сызрань',
		to: 'Москва',
		currency: 'USD',
		cost: '60,38',
		sign: '$'
	},
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

export default mainFormReducer;