import {Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react";
import {Button} from "./Button";
import {GoodDesktop, GoodMobile} from "./styles/GoodListItem.styled";

interface GoodsListItemProps {
	img: string
	description: string
	setSelectedGoodData:
	Dispatch<SetStateAction<{id?: number, img: string; description: string; value: number; netto: number; brutto: number; cost: number;}>>
	setIsChoosedToogle: Dispatch<SetStateAction<boolean>>
	value: number
	netto: number
	brutto: number
	cost: number
	disabled: boolean
	id?: number
	mobile?: boolean
}
export const GoodsListItem = ({id, img, description, value, netto, brutto,
	cost, setSelectedGoodData, setIsChoosedToogle, disabled, mobile}: GoodsListItemProps) => {

	const [isChoosedLocal, setIsChoosedLocal] = useState(false)
	let GoodCurrent: typeof GoodDesktop = GoodDesktop
	useEffect(() => {
		if (!disabled) {
			setIsChoosedLocal(false)
		}
	}, [disabled])

	if (mobile)
		GoodCurrent = GoodMobile

	const onClickHandle = (e: MouseEvent) => {
		e.preventDefault()
		setSelectedGoodData({id, img, description, value, netto, brutto, cost})
		setIsChoosedLocal(prev => !prev)
		setIsChoosedToogle(prev => !prev)
	};

	return (
		<GoodCurrent>
			<img src={img} alt="item" />
			<p>{description}</p>
			{mobile ?
				<Button
					content='Добавить'
					disabled={disabled}
					property='add'
					type='button'
					mobile={true}
					onClick={onClickHandle}
				/>
				:
				<>
					{!isChoosedLocal ?
						<Button
							content='Выбрать'
							disabled={disabled}
							property='choose'
							type='button'
							onClick={onClickHandle} />
						:
						<Button
							choosed={true}
							content='Выбрано'
							disabled={disabled}
							property='choose'
							type='button'
							onClick={onClickHandle} />}
				</>
			}
		</GoodCurrent>
	);
};
