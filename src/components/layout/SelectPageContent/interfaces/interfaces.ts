import { Dispatch, SetStateAction } from 'react'
import {IGoodsData} from '../../../../store/goodsData'

export interface ISelectPropsObject {
	goodsDataInitial: IGoodsData[]
	basket: IGoodsData[]
	setCountGlobal: (index: number, data: any) => void
	setNettoGlobal: (index: number, data: any) => void
	setBruttoGlobal: (index: number, data: any) => void
	setValueGlobal: (index: number, data: any) => void
	deleteBasketElement: (id: number) => void
	addBasketElement: (newElement: IGoodsData) => void
	setFilter: Dispatch<SetStateAction<string>>
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	setSelectedGoodData: Dispatch<SetStateAction<any>>
	isChoosedToogle: boolean
	filter: string
	selectedGoodData: any
}
