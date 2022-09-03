import { useTheme } from '@emotion/react'
import { useEffect, useState } from 'react'
import {IFormData} from '../../../../store/mainForm'
import { Button } from '../../Button/Button'
import Form from '../../Form/Form'
import { FormNotification } from '../../FormNotification/FormNotification'
import { FormWrapper, SelectHeader, SelectHeaderWrapper, SHeader, StyledImgBaykal } from './HeaderDesktop.styled'

interface HeaderDesktopProps {
	select?: boolean
	isNote?: boolean
	basket?: boolean
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status: boolean) => void
}

const HeaderDesktop = ({ basket, select, headerActiveToogle, formData, isNote, updateHeaderToogle }: HeaderDesktopProps) => {
	const { from, to, currency, sign } = formData
	const [hover, setHover] = useState(false)
	const [note, setNote] = useState(true)
	const theme = useTheme()
	useEffect(() => setHover(false), [headerActiveToogle])

	const onClick = () => {
		updateHeaderToogle(!headerActiveToogle)
		setNote(false)
	}

	return (
		<SHeader>
			{!basket && !select && <StyledImgBaykal src='/other/baykal_logo.png' alt='logo' />}
			{select && !headerActiveToogle && (
				<SelectHeaderWrapper>
					{note && isNote && <FormNotification onClick={() => setNote(false)} content='Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения' property='header' />}
					<SelectHeader fw={theme.weight.primary} ff={theme.fonts.secondary} onMouseEnter={() => setHover((prev) => !prev)} onMouseLeave={() => setHover((prev) => !prev)} onClick={onClick}>
						<p>{from}</p>
						<img src='/arrows/arrow_header.png' alt='logo' />
						<p>{to + ','}</p>
						<p>{hover ? currency : sign}</p>
						{hover && <img src='/other/pen_header.png' alt='pen' />}
					</SelectHeader>
				</SelectHeaderWrapper>
			)}
			{select && headerActiveToogle && (
				<FormWrapper>
					<Form select={select} />
				</FormWrapper>
			)}
			<Button
				type='button'
				property='contact'
				content='Связаться'
				width='132px'
				height='45px'
				color={theme.colors.primary}
				bg={theme.backgrounds.tertiary}
				bgh={theme.backgrounds.primary}
				ch={theme.colors.secondary}
			/>
		</SHeader>
	)
}

export default HeaderDesktop
