import Header from '../common/Header';
import React from 'react';
import Form from '../common/Form';
import {SWrapper, SMain, SArticle} from './styles/MainPageContent.styled';

export const MainPageContent = () => {
	return (<SWrapper>
		<Header />
		<SMain>
			<SArticle>
				Рассчитайте <br />стоимость доставки из Китая
			</SArticle>
			<Form />
		</SMain>
	</SWrapper>);
};
