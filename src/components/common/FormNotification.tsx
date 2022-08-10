import styled from "@emotion/styled";



interface FormNotificationProps {
	top?: string
	right?: string
	arrow?: 'up' | 'down' | 'none'
	content: string
}

export const FormNotification = ({top = 'none', right = 'none',arrow = 'none', content}: FormNotificationProps) => {
	const SArticle = styled.article`
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
		top: ${top};
		right: ${right};
	`
	const SIconWrapper = styled.span`
		margin-left: 13px;
	`
	return (
		<SArticle>
			{content}
			<SIconWrapper>
				{arrow === 'up' && <img src='/arrow_up_notification.png' alt='arrow up' />}
				{arrow === 'down' && <img src='/arrow_down_notification.png' alt='arrow up' />}
			</SIconWrapper>
		</SArticle>
	);
};
