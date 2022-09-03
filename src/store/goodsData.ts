import { makeAutoObservable } from 'mobx'

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

class GoodsData {
	goodsDataInitial:IGoodsData[] = [
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
	]
	basket:IGoodsData[] = []
	deleteBasketElement = (index: number) => {
		this.basket.splice(index, 1)
	}
	addBasketElement = (newElement: IGoodsData) => {
		this.basket.push(newElement)
	}
	setCountGlobal = (index: number, data: any) => {
		this.basket[index].count = data
	}
	setBruttoGlobal = (index: number, data: any) => {
		this.basket[index].brutto = data
	}
	setNettoGlobal = (index: number, data: any) => {
		this.basket[index].netto = data
	}
	setValueGlobal = (index: number, data: any) => {
		this.basket[index].value = data
	}
	constructor() {
		makeAutoObservable(this)
	}
}

export default new GoodsData()