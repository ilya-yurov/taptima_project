import { useRouter } from 'next/router'
import { HeaderWrapper, NoGoodsWrapper, NoAddButtonWrapper, MainContent, MainSection } from './NoGoodsPage.styled'
import styled from '@emotion/styled'
import Header from '../../../common/Header/Header'
import { Button } from '../../../common/Button/Button'
import {useTheme} from '@emotion/react'

export const MobileButtonsWrapper = styled.section`
	@media (min-width: 1200px) {
		display: none;
	}
`
export const DesktopButtonsWrapper = styled.section`
	@media (max-width: 1200px) {
		display: none;
	}
`

const NoGoodsPage = () => {
	const router = useRouter()
	const theme = useTheme()

	const onAddClick = () => {
		router.push({ pathname: '/select' })
	}

	return (
		<>
			<NoGoodsWrapper>
				<HeaderWrapper>
					<Header basket={true} select={true} />
				</HeaderWrapper>
				<MainSection>
					<img src='/other/no_goods.png' alt='no goods' />
					<MainContent fz={theme.fontSizes.big}>
						Вы не добавили ни одного элемента.
						<NoAddButtonWrapper>
							<MobileButtonsWrapper>
								<Button type='button' property='add' width='164px' height='55px' onClick={onAddClick} content='Добавить' />
							</MobileButtonsWrapper>
							<DesktopButtonsWrapper>
								<Button icon='plus' type='button' property='add' onClick={onAddClick} content='Добавить' width='206px' height='55px' />
							</DesktopButtonsWrapper>
						</NoAddButtonWrapper>
					</MainContent>
				</MainSection>
			</NoGoodsWrapper>
		</>
	)
}

export default NoGoodsPage
