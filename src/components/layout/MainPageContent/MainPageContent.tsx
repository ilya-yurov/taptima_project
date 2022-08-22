import Header from '../../common/Header/Header'
import Form from '../../common/Form/Form'
import { SWrapper, SMain, SArticle } from './MainPageContent.styled'
import {useTheme} from '@emotion/react'

export const MainPageContent = () => {
	const theme = useTheme()
	return (
		<SWrapper>
			<Header main={true} />
			<SMain>
				<SArticle fz={theme.fontSizes.big}>
					Рассчитайте <br />
					стоимость доставки из Китая
				</SArticle>
				<Form />
			</SMain>
		</SWrapper>
	)
}
