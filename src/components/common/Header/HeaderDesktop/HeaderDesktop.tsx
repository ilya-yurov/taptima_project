import React, { useEffect, useState } from 'react'
import { IFormData } from '../../../../redux/mainFormReducer'
import { Button } from '../../Button'
import Form from '../../Form/Form'
import { FormNotification } from '../../FormNotification'
import { FormWrapper, SelectHeader, SelectHeaderWrapper, SHeader, StyledImgBaykal } from './HeaderDesktop.styled'

interface HeaderDesktopProps {
	select?: boolean
	isNote?: boolean
	basket?: boolean
	formData: IFormData
	headerActiveToogle: boolean
	updateHeaderToogle: (status: boolean) => { type: string; payload: boolean }
}

const HeaderDesktop = ({ basket, select, headerActiveToogle, formData, isNote, updateHeaderToogle }: HeaderDesktopProps) => {
	const { from, to, currency, sign } = formData
	const [hover, setHover] = useState(false)
	const [note, setNote] = useState(true)
	useEffect(() => setHover(false), [headerActiveToogle])

	const onClick = () => {
		updateHeaderToogle(!headerActiveToogle)
		setNote(false)
	}

	return (
		<SHeader>
			{!basket && !select && (
				<StyledImgBaykal
					src='/other/baykal_logo.png'
					alt='logo'
				/>
			)}
			{select && !headerActiveToogle && (
				<SelectHeaderWrapper>
					{note && isNote && (
						<FormNotification
							onClick={() => setNote(false)}
							content='Теперь ваши параметры выведены сверху, нажмите на них, чтобы  внести изменения'
							property='header'
						/>
					)}
					<SelectHeader
						onMouseEnter={() => setHover((prev) => !prev)}
						onMouseLeave={() => setHover((prev) => !prev)}
						onClick={onClick}>
						<p>{from}</p>
						<img
							src='/arrows/arrow_header.png'
							alt='logo'
						/>
						<p>{to + ','}</p>
						<p>{hover ? currency : sign}</p>
						{hover && (
							<img
								src='/other/pen_header.png'
								alt='pen'
							/>
						)}
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
			/>
		</SHeader>
	)
}

export default HeaderDesktop
