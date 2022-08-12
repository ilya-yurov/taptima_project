import styled from "@emotion/styled";

const DefaultNotification = styled.article`
`

const MainUpNotification = styled.article`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-family: 'OpenSans';
	font-weight: 600;
	font-size: 15px;
	line-height: 15px;
	color: #5DAAFF;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 130px;
	@media (max-width: 1200px) {
		display: none;
	}
`
const MainDownNotification = styled.article`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-family: 'OpenSans';
	font-weight: 600;
	font-size: 15px;
	line-height: 15px;
	color: #5DAAFF;
	display: flex;
	justify-content: center;
	align-items: center;
	top: -25px;
	right: -107px;
	@media (max-width: 1200px) {
		display: none;
	}
`
const HeaderNotification = styled.article`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-family: 'OpenSans';
	font-weight: 600;
	font-size: 15px;
	line-height: 15px;
	color: #5DAAFF;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 100px;
	left: 320px;
	@media (max-width: 1200px) {
		display: none;
	}
`

const SIconWrapper = styled.span`
margin-left: 13px;
`
const SHeaderIconWrapper = styled.span`
margin-left: 13px;
margin-right: 13px;
`

interface FormNotificationProps {
	content: string
	property?: 'main down' | 'main up' | 'header' | 'search' | 'complete form'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export const FormNotification = ({content, property, onClick}: FormNotificationProps) => {

	let CurrentNotification: typeof DefaultNotification = DefaultNotification;
	if (property === 'main up')
		CurrentNotification = MainUpNotification
	else if (property === 'main down')
		CurrentNotification = MainDownNotification
	else if (property === 'header')
		CurrentNotification = HeaderNotification
	return (
		<CurrentNotification>
			<SHeaderIconWrapper>
				{property === 'header' && <img src='/arrows/arrow_up_notification.png' alt='arrow up' />}
			</SHeaderIconWrapper>
			{content}
			<SIconWrapper onClick={onClick}>
				{property === 'header' && <img src='/cross_notification.png' alt='cross' />}
			</SIconWrapper>
			<SIconWrapper>
				{property === 'main up' && <img src='/arrows/arrow_up_notification.png' alt='arrow up' />}
				{property === 'main down' && <img src='/arrows/arrow_down_notification.png' alt='arrow down' />}
			</SIconWrapper>
		</CurrentNotification>
	);
};
