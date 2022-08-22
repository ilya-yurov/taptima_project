import { Dispatch, SetStateAction } from 'react'
import { IGoodsData, ISetPayload } from '../../../redux/goodsDataReducer'

export interface ISelectPropsObject {
	goodsData: IGoodsData[]
	basket: IGoodsData[]
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	deleteBasketElement: (id: number) => { type: string; payload: number }
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setFilter: Dispatch<SetStateAction<string>>
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	setSelectedGoodData: Dispatch<SetStateAction<any>>
	isChoosedToogle: boolean
	filter: string
	selectedGoodData: any
}
