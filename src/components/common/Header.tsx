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

	const StyledBurger = styled.button`
	display: none;
	@media (max-width: 1200px) {
		display: block;
		width: 22px;
		height: 20px;
		border: none;
		background: url("/menu_burger.png");
	}
	`


	return (
		<StyledHeader>
			<StyledImg src="/baykal_logo.png" alt="logo" />
			<Button
				width={'132px'}
				height={'45px'}
				color={'#606F7A'}
				bgc={'white'}
				type='button'
				content='Связаться'
				bs={true}
				mq={true}
				/>
			<StyledBurger/>
		</StyledHeader>
	);
};
