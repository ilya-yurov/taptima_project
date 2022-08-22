import { useTheme } from '@emotion/react'
import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { GoodDesktop, GoodMobile } from './GoodListItem.styled'

interface GoodsListItemProps {
	img: string
	description: string
	setSelectedGoodData: Dispatch<SetStateAction<{ id?: number; img: string; description: string; value: number; netto: number; brutto: number; cost: number }>>
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	value: number
	netto: number
	brutto: number
	cost: number
	disabled: boolean
	id?: number
}
export const GoodsListItem = ({ id, img, description, value, netto, brutto, cost, setSelectedGoodData, setIsChoosedToogle, disabled }: GoodsListItemProps) => {
	const [isChoosedLocal, setIsChoosedLocal] = useState(false)
	const theme = useTheme()
	useEffect(() => {
		if (!disabled) {
			setIsChoosedLocal(false)
		}
	}, [disabled])
	
	const onClickHandle = (e: MouseEvent) => {
		e.preventDefault()
		setSelectedGoodData({ id, img, description, value, netto, brutto, cost })
		setIsChoosedLocal((prev) => !prev)
		setIsChoosedToogle((prev) => !prev)
	}

	return (
		<>
			<GoodMobile fz={theme.fontSizes.tertiary}>
				<img src={img} alt='item' />
				<p>{description}</p>
				<Button
					content='Добавить'
					disabled={disabled}
					property='add'
					type='button'
					onClick={onClickHandle}
					width='68px'
					height='30px'
					fz={theme.fontSizes.tertiary}
				/>
			</GoodMobile>
			<GoodDesktop>
				<img src={img} alt='item' />
				<p>{description}</p>
				<>
					{!isChoosedLocal ? (
						<Button content='Выбрать' disabled={disabled} property='choose' type='button' onClick={onClickHandle} width='135px' height='45px' />
					) : (
						<Button
							content='Выбрано'
							disabled={disabled}
							property='choose'
							type='button'
							onClick={onClickHandle}
							width='135px'
							height='45px'
							bg={theme.backgrounds.tertiary}
							bgh={theme.backgrounds.tertiary}
							color={theme.colors.primary}
							ch={theme.colors.primary}
						/>
					)}
				</>
			</GoodDesktop>
		</>
	)
}
