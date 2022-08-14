import styled from "@emotion/styled";
import {Dispatch, MouseEvent, SetStateAction, useEffect, useState} from "react";
import {Button} from "./Button";

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
const GoodDesktop = styled.section`
	display: flex;
	align-items: center;
	height: 99px;
	background: #F8FAFF;
	border: 1px solid #E2E4EA;
	border-radius: 3px;
	p {
		flex-grow: 1;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 17px;
		color: #606F7A;
	}
	img {
		width: 120px;
		height: 97px;
	}
`;
const GoodMobile = styled.section`
	justify-content: center;
	display: flex;
	align-items: center;
	height: 60px;
	background: #F8FAFF;
	border: 1px solid #E2E4EA;
	border-radius: 3px;
	p {
		flex-grow: 1;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		color: #606F7A;
	}
	img {
		width: 69px;
		height: 48px;
	}
`;
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
