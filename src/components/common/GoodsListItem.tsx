import styled from "@emotion/styled";
import {MouseEvent} from "react";
import {Button} from "./Button";

interface GoodsListItemProps {
	img: string;
	description: string;
}
const Good = styled.section`
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
`;
export const GoodsListItem = ({img, description}: GoodsListItemProps) => {

	const onClickHandle = (e: MouseEvent) => {
		e.preventDefault();
	};

	return (
		<Good>
			<img src={img} alt="item" />
			<p>{description}</p>
			<Button
				content='Выбрать'
				property='choose'
				type='button'
				onClick={onClickHandle} />
		</Good>
	);
};
