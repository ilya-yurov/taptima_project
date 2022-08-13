import {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {IFormData, updateMainForm, updateHeaderToogle} from '../../redux/mainFormReducer';
import {Button} from '../common/Button';
import Form from '../common/Form';
import {FormNotification} from '../common/FormNotification';
import {SHeader, StyledImg, SelectHeaderWrapper, SelectHeader, FormWrapper, StyledBurger} from './styles/Header.styled';

interface HeaderProps {
	select?: boolean
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status: boolean) => ({type: string, payload: boolean})
}


const Header = ({select, formData, headerActiveToogle, updateHeaderToogle}: HeaderProps) => {

	const {from, to, currency, cost, sign} = formData

	const [hover, setHover] = useState(false)
	const [note, setNote] = useState(true)

	useEffect(() => setHover(false), [headerActiveToogle])

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