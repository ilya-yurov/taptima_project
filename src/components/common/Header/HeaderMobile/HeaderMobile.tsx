import { useTheme } from '@emotion/react'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import { IFormData } from '../../../../redux/mainFormReducer'
import SearchBar from '../../SearchBar/SearchBar'
import { ImgBack, SelectHeader, StyledImgBaykal, StyledBurger, SHeader } from './HeaderMobile.styled'

interface HeaderMobileProps {
	select?: boolean
	main?: boolean
	basket?: boolean
	disabled?: boolean | any
	setFilter?: Dispatch<SetStateAction<string>> | any
	formData: IFormData
}

const HeaderMobile = ({ formData, basket, select, disabled, setFilter, main }: HeaderMobileProps) => {
	const { from, to, sign } = formData
	const router = useRouter()
	const theme = useTheme()
	const onClickRedirectMobile = () => {
		router.push({ pathname: '/' })
	}
	return (
		<SHeader>
			{!basket && !select && <StyledImgBaykal src='/other/baykal_logo.png' alt='logo' />}
			{select && !basket && (
				<button onClick={onClickRedirectMobile}>
					<ImgBack src='/other/back_select_mobile.png' alt='logo' />
				</button>
			)}
			{basket && (
				<SelectHeader fw={theme.weight.secondary}>
					<div>
						<p>{from}</p>
						<img src='/arrows/arrow_header.png' alt='logo' />
						<p>{to + ','}</p>
						<p>{sign}</p>
					</div>
				</SelectHeader>
			)}
			{!main && !basket && <SearchBar setFilter={setFilter} disabled={disabled} placeholder='Поиск...' />}
			<StyledBurger />
		</SHeader>
	)
}

export default HeaderMobile
