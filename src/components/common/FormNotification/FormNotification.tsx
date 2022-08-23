import { useTheme } from '@emotion/react'
import {
	DefaultNotification,
	MainUpNotification,
	MainDownNotification,
	HeaderNotification,
	SearchNotification,
	CompleteFormNotification,
	Added1FormNotification,
	Added2FormNotification,
	Added3FormNotification,
	SHeaderIconWrapper,
	SIconWrapper,
} from './FormNotification.styled'

interface FormNotificationProps {
	content: string
	property?: 'main down' | 'main up' | 'header' | 'search' | 'complete form' | 'added1' | 'added2' | 'added3'
	onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void
}

export const FormNotification = ({ content, property, onClick }: FormNotificationProps) => {
	const theme = useTheme()
	let CurrentNotification: typeof DefaultNotification = DefaultNotification
	switch (property) {
		case 'main up':
			CurrentNotification = MainUpNotification
			break
		case 'main down':
			CurrentNotification = MainDownNotification
			break
		case 'header':
			CurrentNotification = HeaderNotification
			break
		case 'search':
			CurrentNotification = SearchNotification
			break
		case 'complete form':
			CurrentNotification = CompleteFormNotification
			break
		case 'added1':
			CurrentNotification = Added1FormNotification
			break
		case 'added2':
			CurrentNotification = Added2FormNotification
			break
		case 'added3':
			CurrentNotification = Added3FormNotification
			break
	}
	return (
		<CurrentNotification fw={theme.weight.secondary}>
			<SHeaderIconWrapper onClick={onClick}>
				{property === 'header' && <img src='/arrows/arrow_up_notification.png' alt='arrow up' />}
				{(property === 'added1' || property === 'added2' || property === 'added3') && <img src='/other/cross_notification.png' alt='cross' />}
			</SHeaderIconWrapper>
			{property === 'search' && <img src='/arrows/arrow_left_notification.png' alt='cross' />}
			<p>{content}</p>
			<SIconWrapper onClick={onClick}>
				{property === 'complete form' && <img src='/arrows/arrow_down_notification.png' alt='arrow down' />}
				{property === 'added2' && <img src='/arrows/arrow_right_notification.png' alt='arrow down' />}
				{(property === 'header' || property === 'complete form') && <img src='/other/cross_notification.png' alt='cross' />}
			</SIconWrapper>
			<SIconWrapper>
				{property === 'main up' && <img src='/arrows/arrow_up_notification.png' alt='arrow up' />}
				{(property === 'main down' || property === 'added3') && <img src='/arrows/arrow_down_notification.png' alt='arrow down' />}
			</SIconWrapper>
		</CurrentNotification>
	)
}
