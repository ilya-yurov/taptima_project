import styled from '@emotion/styled';
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {IFormData, updateMainForm, updateHeaderToogle} from '../../redux/mainFormReducer';
import {Button} from '../common/Button';
import Form from '../common/Form';
import {FormNotification} from '../common/FormNotification';

const SHeader = styled.header`
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

const SelectHeaderWrapper = styled.header`
	flex-grow: 1;

`

const SelectHeader = styled.header`
	width: 261px;
	height: 45px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 17px;
	color: #606F7A;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 7px;
	margin-left: 30px;
	&:hover {
		background-color: white;
		margin-left: 60px;
	}
`

const FormWrapper = styled.div`
flex-grow: 1;
`

interface HeaderProps {
	select?: boolean
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status:boolean) => ({type: string, payload: boolean})
}


const Header = ({select, formData, headerActiveToogle, updateHeaderToogle}: HeaderProps) => {

	const {from, to, currency, cost, sign} = formData

	const [hover, setHover] = useState(false)
	const [note, setNote] = useState(true)

	useEffect(() => setHover(false), [headerActiveToogle])

	console.log('render')
	const onClick = () => {
		updateHeaderToogle(!headerActiveToogle)
		setNote(false)
	}
	return (
		<>
		<SHeader>
			<StyledImg src="/baykal_logo.png" alt="logo" />
			{select && !headerActiveToogle &&
				<SelectHeaderWrapper>
					{note &&
					<FormNotification
						onClick={() => setNote(false)}
						content="Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения"
						property="header"
					/>}
					<SelectHeader
						onMouseEnter={() => setHover(prev => !prev)}
						onMouseLeave={() => setHover(prev => !prev)}
						onClick={onClick}
					>
						<p>{from}</p>
						<img src="/arrows/arrow_header.png" alt="logo" />
						<p>{to + ','}</p>
						<p>{hover ? currency : sign}</p>
						{hover && <img src="/pen_header.png" alt="pen" />}
					</SelectHeader>
				</SelectHeaderWrapper>}

			{select && headerActiveToogle &&
				<FormWrapper>
					<Form select={select} />
				</FormWrapper>
			}
			<Button
				type='button'
				property='contact'
				content='Связаться'
			/>
			<StyledBurger />
		</SHeader>
		</>
	);
};

const mapStateToProps = (state: any) => ({
	formData: state.mainForm.formData,
	headerActiveToogle: state.mainForm.headerActiveToogle
})

export default connect(mapStateToProps, {updateMainForm, updateHeaderToogle})(Header)