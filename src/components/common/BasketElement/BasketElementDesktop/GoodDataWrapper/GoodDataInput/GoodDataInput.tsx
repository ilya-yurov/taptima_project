import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { setCorrectValue } from '../../../../../../utils/helpers'

interface ISeters {
	setCount: Dispatch<SetStateAction<any>>
	setNetto: Dispatch<SetStateAction<any>>
	setBrutto: Dispatch<SetStateAction<any>>
	setValue: Dispatch<SetStateAction<any>>
}

interface GoodDataInputProps {
	name: 'count' | 'netto' | 'brutto' | 'value'
	value: any
	seters: ISeters
}

const GoodDataInput = ({ name, value, seters }: GoodDataInputProps) => {
	const { setCount, setNetto, setBrutto, setValue } = seters
	let onChange
	switch (name) {
		case 'count':
			onChange = (e: ChangeEvent<HTMLInputElement>) => {
				let data: string = setCorrectValue(e.target.value, false)
				if (Number(data) === 0) setCount('')
				else setCount(data)
			}
			break
		case 'netto':
			onChange = (e: ChangeEvent<HTMLInputElement>) => {
				let data: string = setCorrectValue(e.target.value, false)
				if (Number(data) === 0) setNetto('')
				else setNetto(data)
			}
			break
		case 'brutto':
			onChange = (e: ChangeEvent<HTMLInputElement>) => {
				let data: string = setCorrectValue(e.target.value, false)
				if (Number(data) === 0) setBrutto('')
				else setBrutto(data)
			}
			break
		case 'value':
			onChange = (e: ChangeEvent<HTMLInputElement>) => {
				let data: string = setCorrectValue(e.target.value, false)
				if (Number(data) === 0) setValue('')
				else setValue(data)
			}
			break
	}

	return (
		<input
			autoFocus
			name={name}
			id={name}
			type='text'
			value={value}
			onChange={onChange}
		/>
	)
}

export default GoodDataInput
