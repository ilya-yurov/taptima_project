import styled from '@emotion/styled';
import {Button} from './Button';

export const Header = () => {

	const StyledHeader = styled.header`
		display: flex;
		justify-content: space-between;
	`

	const StyledImg = styled.img`
		width: 163px;
		height: 40px;
	`

	return (
		<StyledHeader>
			<StyledImg src="/baykal_logo.png" alt="logo" />
			<Button
				width={'132px'}
				height={'45px'}
				color={'#606F7A'}
				bgc={'white'}
				content='Связаться'
				bs={true}
				mq={true}
				/>
		</StyledHeader>
	);
};
