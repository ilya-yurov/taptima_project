const DELETE_ELEMENT = 'DELETE_ELEMENT'
const ADD_ELEMENT = 'ADD_ELEMENT'
const SET_COUNT = 'SET_COUNT'
const SET_NETTO = 'SET_NETTO'
const SET_BRUTTO = 'SET_BRUTTO'
const SET_VALUE = 'SET_VALUE'

export interface IGoodsData {
	id?: number
	img: string
	description: string
	count?: any
	netto: any
	brutto: any
	cost: any
	value: any
}

export interface ISetPayload {
	index: number
	data: any
}

interface IInitialState {
	goodsData: IGoodsData[]
	basket: IGoodsData[]
}

interface IDeleteBasketElement {
	type: 'DELETE_ELEMENT'
	payload: number
}

interface IAddBasketElement {
	type: 'ADD_ELEMENT'
	payload: IGoodsData
}

interface ISetCountGlobal {
	type: 'SET_COUNT'
	payload: ISetPayload
}

interface ISetNettoGlobal {
	type: 'SET_NETTO'
	payload: ISetPayload
}

interface ISetBruttoGlobal {
	type: 'SET_BRUTTO'
	payload: ISetPayload
}

interface ISetValueGlobal {
	type: 'SET_VALUE'
	payload: ISetPayload
}

type Action = IDeleteBasketElement | IAddBasketElement | ISetCountGlobal | ISetNettoGlobal | ISetBruttoGlobal | ISetValueGlobal

const initialState: IInitialState = {
	goodsData: [
		{
			id: 1,
			img: '/other/bed.webp',
			description: 'Кровать',
			value: 1,
			netto: 80,
			brutto: 90,
			cost: 45000
		},
		{
			id: 3,
			img: '/other/chair.jpg',
			description: 'Стул',
			value: 1,
			netto: 10,
			brutto: 12,
			cost: 5000
		},
		{
			id: 4,
			img: '/other/table.jpg',
			description: 'Стол',
			value: 2,
			netto: 16,
			brutto: 20,
			cost: 10000
		},
		{
			id: 5,
			img: '/other/wardrobe.webp',
			description: 'Шкаф',
			value: 2,
			netto: 50,
			brutto: 55,
			cost: 15000
		},
		{
			id: 6,
			img: '/other/pedestal.jpg',
			description: 'Тумба',
			value: 1,
			netto: 20,
			brutto: 22,
			cost: 8000
		},
		{
			id: 7,
			img: '/other/shelf.jpeg',
			description: 'Стеллаж',
			value: 1,
			netto: 22,
			brutto: 26,
			cost: 8500
		},
		{
			id: 8,
			img: '/other/sofa.png',
			description: 'Диван-кровать, раскладывается',
			value: 3,
			netto: 75,
			brutto: 85,
			cost: 30000
		},
		{
			id: 9,
			img: '/other/stool.png',
			description: 'Табурет',
			value: 1,
			netto: 5,
			brutto: 7,
			cost: 2500
		}
	],
	basket: []
}

const goodsDataReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case DELETE_ELEMENT:
			return {
				...state,
				...state.basket.splice(action.payload, 1)
			}
		case ADD_ELEMENT:
			return {
				...state,
				basket: [...state.basket, action.payload]
			}
		case SET_COUNT:
			return {
				...state,
				...state.basket,
				...state.basket[action.payload.index].count = action.payload.data
			}
		case SET_NETTO:
			return {
				...state,
				...state.basket,
				...state.basket[action.payload.index].netto = action.payload.data
			}
		case SET_BRUTTO:
			return {
				...state,
				...state.basket,
				...state.basket[action.payload.index].brutto = action.payload.data
			}
		case SET_VALUE:
			return {
				...state,
				...state.basket,
				...state.basket[action.payload.index].value = action.payload.data
			}
		default:
			return state
	}
}

export const deleteBasketElement = (id: number) => ({type: DELETE_ELEMENT, payload: id})
export const addBasketElement = (newElement: IGoodsData) => ({type: ADD_ELEMENT, payload: newElement})
export const setCountGlobal = (index: number, data: any) => ({type: SET_COUNT, payload: {index, data}})
export const setNettoGlobal = (index: number, data: any) => ({type: SET_NETTO, payload: {index, data}})
export const setBruttoGlobal = (index: number, data: any) => ({type: SET_BRUTTO, payload: {index, data}})
export const setValueGlobal = (index: number, data: any) => ({type: SET_VALUE, payload: {index, data}})

export default goodsDataReducer