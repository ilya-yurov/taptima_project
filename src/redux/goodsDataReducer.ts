const DELETE_ELEMENT = 'DELETE_ELEMENT'
const ADD_ELEMENT = 'ADD_ELEMENT'

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

type Action = IDeleteBasketElement | IAddBasketElement

const initialState: IInitialState = {
	goodsData: [
		{
			id: 1,
			img: '/sofa.png',
			description: 'Диван-кровать, раскладывается',
			value: 3,
			netto: 75,
			brutto: 85,
			cost: 30000
		},
		{
			id: 2,
			img: '/bed.webp',
			description: 'Кровать',
			value: 1,
			netto: 80,
			brutto: 90,
			cost: 45000
		},
		{
			id: 3,
			img: '/chair.jpg',
			description: 'Стул',
			value: 1,
			netto: 10,
			brutto: 12,
			cost: 5000
		},
		{
			id: 4,
			img: '/table.jpg',
			description: 'Стол',
			value: 2,
			netto: 16,
			brutto: 20,
			cost: 10000
		},
		{
			id: 5,
			img: '/wardrobe.webp',
			description: 'Шкаф',
			value: 2,
			netto: 50,
			brutto: 55,
			cost: 15000
		},
		{
			id: 6,
			img: '/pedestal.jpg',
			description: 'Тумба',
			value: 1,
			netto: 20,
			brutto: 22,
			cost: 8000
		},
		{
			id: 7,
			img: '/shelf.jpeg',
			description: 'Стеллаж',
			value: 1,
			netto: 22,
			brutto: 26,
			cost: 8500
		},
		{
			id: 8,
			img: '/stool.png',
			description: 'Табурет',
			value: 1,
			netto: 5,
			brutto: 7,
			cost: 2500
		},
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
		default:
			return state
	}
}

export const deleteBasketElement = (id: number) => ({type: DELETE_ELEMENT, payload: id})
export const addBasketElement = (newElement: IGoodsData) => ({type: ADD_ELEMENT, payload: newElement})

export default goodsDataReducer;