import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IGoodsData, ISetPayload } from '../../../../redux/goodsDataReducer'
import { setCorrectValue } from '../../../../utils/helpers'
import { FormWrapper, InputCount } from './FormContainer.styled'
import NumberSelectionButtons from './NumberSelectionButtons/NumberSelectionButtons'

export interface IValues {
	count: string
	value: string
	netto: string
	brutto: string
	cost: string
}

interface ISeters {
	setNetto: Dispatch<SetStateAction<any>>
	setBrutto: Dispatch<SetStateAction<any>>
	setValue: Dispatch<SetStateAction<any>>
	setCount: Dispatch<SetStateAction<any>>
}

interface FormContainerProps {
	goodData: IGoodsData
	setters: ISeters
	values: IValues
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	isDisable?: boolean
	isChoosedToogle?: boolean
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const FormContainer = ({
	goodData,
	isDisable,
	setters,
	basket,
	values,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
	setIsChoosedToogle,
	addBasketElement,
}: FormContainerProps) => {
	const { setNetto, setBrutto, setValue, setCount } = setters
	const { value, netto, brutto, count } = values
	const onCountChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, false)
		if (Number(value) === 0) setCount('')
		else setCount(value)
	}
	const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'м3')
		setValue(value)
	}
	const onNettoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'кг')
		setNetto(value)
	}
	const onBruttoChange = (e: ChangeEvent<HTMLInputElement>) => {
		let value: string = setCorrectValue(e.target.value, 'кг')
		setBrutto(value)
	}

	return (
		<>
			<FormWrapper action=''>
				<InputCount name='count' id='value' type='text' placeholder={'Кол-во'} value={count} onChange={onCountChange} />
				<input name='value' id='value' type='text' placeholder={'Общий объем, м3'} value={value} onChange={onValueChange} />
				<input name='netto' id='netto' type='text' placeholder={'Общая масса нетто, кг'} value={netto} onChange={onNettoChange} />
				<input name='brutto' id='brutto' type='text' placeholder={'Общая масса брутто, кг'} value={brutto} onChange={onBruttoChange} />
				<input name='cost' id='cost' type='text' disabled={true} placeholder={'Стоимость одной единицы'} value={goodData.cost + ' руб'} />
				<NumberSelectionButtons
					setIsChoosedToogle={setIsChoosedToogle}
					basket={basket}
					goodData={goodData}
					setCountGlobal={setCountGlobal}
					setNettoGlobal={setNettoGlobal}
					setBruttoGlobal={setBruttoGlobal}
					setValueGlobal={setValueGlobal}
					values={values}
					addBasketElement={addBasketElement}
					isDisable={isDisable}
				/>
			</FormWrapper>
		</>
	)
}

export default FormContainer
