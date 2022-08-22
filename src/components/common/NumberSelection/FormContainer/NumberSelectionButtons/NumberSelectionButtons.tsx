import { useRouter } from 'next/router'
import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { IGoodsData, ISetPayload } from '../../../../../redux/goodsDataReducer'
import { clearLetters } from '../../../../../utils/helpers'
import { Button } from '../../../Button/Button'
import { IValues } from '../FormContainer'
import { ButtonsWrapper, DesktopButtonsWrapper, MobileButtonsWrapper } from './NumberSelectionButtons.styled'

interface NumberSelectionButtonsProps {
	goodData: IGoodsData
	values: IValues
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	basket: IGoodsData[]
	isDisable?: boolean
	addBasketElement: (newElement: IGoodsData) => { type: string; payload: IGoodsData }
	setCountGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setNettoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setBruttoGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
	setValueGlobal: (index: number, data: any) => { type: string; payload: ISetPayload }
}

const NumberSelectionButtons = ({
	setIsChoosedToogle,
	basket,
	goodData,
	setCountGlobal,
	setNettoGlobal,
	setBruttoGlobal,
	setValueGlobal,
	values,
	addBasketElement,
	isDisable,
}: NumberSelectionButtonsProps) => {
	const { count, value, netto, brutto, cost } = values
	const router = useRouter()
	const onReset = (e: MouseEvent) => {
		e.preventDefault()
		setIsChoosedToogle((prev) => !prev)
	}
	const currentGoodElementIndex = basket.findIndex((el) => el.id === goodData.id)
	const handleSubmit = (e: MouseEvent) => {
		e.preventDefault()
		let basketMatch
		if (basket.some((el) => el.id === goodData.id)) {
			basketMatch = basket.find((el) => el.id === goodData.id)
			setCountGlobal(currentGoodElementIndex, parseInt(basketMatch?.count) + parseInt(count))
			setNettoGlobal(currentGoodElementIndex, parseInt(basketMatch?.netto) + parseInt(netto))
			setBruttoGlobal(currentGoodElementIndex, parseInt(basketMatch?.brutto) + parseInt(brutto))
			setValueGlobal(currentGoodElementIndex, parseInt(basketMatch?.value) + parseInt(value))
			setIsChoosedToogle((prev) => !prev)
			router.push({ pathname: '/basket' })
		} else {
			addBasketElement({
				id: goodData.id,
				img: goodData.img,
				description: goodData.description,
				count,
				netto: parseInt(clearLetters(netto)),
				brutto: parseInt(clearLetters(brutto)),
				cost: parseInt(clearLetters(cost)),
				value: parseInt(clearLetters(value)),
			})
			setIsChoosedToogle((prev) => !prev)
			router.push({ pathname: '/basket' })
		}
	}
	return (
		<>
			<MobileButtonsWrapper>
				<ButtonsWrapper>
					<Button content={'Сбросить'} property='add' type='reset' onClick={onReset} width='280px' height='55px' />
					<Button content={'Продолжить'} property='add' disabled={isDisable} type='submit' onClick={handleSubmit} width='280px' height='55px' />
				</ButtonsWrapper>
			</MobileButtonsWrapper>
			<DesktopButtonsWrapper>
				<ButtonsWrapper>
					<Button content={'Сбросить'} property='add' type='reset' onClick={onReset} width='206px' height='55px' />
					<Button content={'Продолжить'} property='add' disabled={isDisable} type='submit' onClick={handleSubmit} width='206px' height='55px' />
				</ButtonsWrapper>
			</DesktopButtonsWrapper>
		</>
	)
}

export default NumberSelectionButtons
