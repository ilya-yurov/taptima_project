import {useRouter} from 'next/router';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {IFormData, updateMainForm, updateHeaderToogle} from '../../redux/mainFormReducer';
import {Button} from './Button';
import Form from './Form';
import {FormNotification} from './FormNotification';
import SearchBar from './SearchBar';
import {SHeader, StyledImgBaykal, StyledImgBack, SelectHeaderWrapper, SelectHeader, FormWrapper, StyledBurger} from './styles/Header.styled';

interface HeaderProps {
	select?: boolean
	isNote?: boolean
	mobile?: boolean
	basket?: boolean
	disabled?: boolean | any
	setFilter?: Dispatch<SetStateAction<string>> | any
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status: boolean) => ({type: string, payload: boolean})
}

const Header = ({select, formData, headerActiveToogle, updateHeaderToogle, isNote, mobile, setFilter, disabled, basket}: HeaderProps) => {

	const {from, to, currency, sign} = formData
	const [hover, setHover] = useState(false)
	const [note, setNote] = useState(true)
	const router = useRouter()

	useEffect(() => setHover(false), [headerActiveToogle])

	const onClick = () => {
		updateHeaderToogle(!headerActiveToogle)
		setNote(false)
	}

	const onClickRedirectMobile = () => {
		router.push({pathname: '/'})
	}

	return (
		<>
			<SHeader>
				{!mobile && <StyledImgBaykal src="/other/baykal_logo.png" alt="logo" />}
				{mobile && !basket &&
					<button onClick={onClickRedirectMobile}>
						<StyledImgBack src="/other/back_select_mobile.png" alt="logo" />
					</button>}
				{mobile && basket && <SelectHeader>
					<div>
						<p>{from}</p>
						<img src="/arrows/arrow_header.png" alt="logo" />
						<p>{to + ','}</p>
						<p>{hover ? currency : sign}</p>
					</div>
				</SelectHeader>}
				{mobile && !disabled && !basket && <SearchBar setFilter={setFilter} disabled={disabled} mobile={mobile} placeholder="Поиск..." />}
				{select && !headerActiveToogle &&
					<SelectHeaderWrapper>
						{note && isNote &&
							<FormNotification
								onClick={() => setNote(false)}
								content="Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения"
								property="header"
							/>}
						{!mobile && <SelectHeader
							onMouseEnter={() => setHover(prev => !prev)}
							onMouseLeave={() => setHover(prev => !prev)}
							onClick={onClick}
						>
							<p>{from}</p>
							<img src="/arrows/arrow_header.png" alt="logo" />
							<p>{to + ','}</p>
							<p>{hover ? currency : sign}</p>
							{hover && <img src="/other/pen_header.png" alt="pen" />}
						</SelectHeader>}
					</SelectHeaderWrapper>}

				{select && headerActiveToogle && !mobile &&
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
	)
}

const mapStateToProps = (state: any) => ({
	formData: state.mainForm.formData,
	headerActiveToogle: state.mainForm.headerActiveToogle
})

export default connect(mapStateToProps, {updateMainForm, updateHeaderToogle})(Header)