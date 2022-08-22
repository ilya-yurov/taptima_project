import { useRouter } from 'next/router'
import { HeaderWrapper, NoGoodsWrapper, NoAddButtonWrapper } from './NoGoodsPage.styled'
import styled from '@emotion/styled'
import Header from '../../../common/Header/Header'
import { Button } from '../../../common/Button/Button'

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

	const onAddClick = () => {
		router.push({ pathname: '/select' })
	}

	return (
		<>
			<NoGoodsWrapper>
				<HeaderWrapper>
					<Header basket={true} select={true} />
				</HeaderWrapper>
				<section>
					<img src='/other/no_goods.png' alt='no goods' />
					<p>
						Вы не добавили ни одного элемента.
						<NoAddButtonWrapper>
							<MobileButtonsWrapper>
								<Button type='button' property='add' width='164px' height='55px' onClick={onAddClick} content='Добавить' />
							</MobileButtonsWrapper>
							<DesktopButtonsWrapper>
								<Button icon='plus' type='button' property='add' onClick={onAddClick} content='Добавить' width='206px' height='55px' />
							</DesktopButtonsWrapper>
						</NoAddButtonWrapper>
					</p>
				</section>
			</NoGoodsWrapper>
		</>
	)
}

export default NoGoodsPage
