import styled from '@emotion/styled';
import {Button} from './Button';
import Form from './Form';

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: flex-flex-start;
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

const FormWrapper = styled.div`
flex-grow: 1;
`

interface HeaderProps {
	select?: boolean
}


export const Header = ({select}:HeaderProps) => {



	return (
		<StyledHeader>
			<StyledImg src="/baykal_logo.png" alt="logo" />
			{select &&
			<FormWrapper>
				<Form select={select}/>
			</FormWrapper>
			}
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
