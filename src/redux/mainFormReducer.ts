
const UPDATE_FORM = 'UPDATE_FORM'

export interface IFormData {
	from: string
	to: string
	currentCurrency: string
	cost: string
}

interface IInitialState {
	formData: IFormData
}

interface IUpdateMainForm {
	type: 'UPDATE_FORM'
	payload: IFormData
}

type Action = IUpdateMainForm

const initialState: IInitialState = {
	formData: {
		from: '',
		to: 'Москва',
		currentCurrency: 'USD',
		cost: '60,38'
	}
}

const mainFormReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case UPDATE_FORM:
			/* debugger; */
			return {
				...state,
				formData: action.payload
			}
		default:
			return state
	}
}

export const updateMainForm = (formData:IFormData) => ({type: UPDATE_FORM, payload: formData})

export default mainFormReducer;