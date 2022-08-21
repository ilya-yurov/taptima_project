import Header from '../common/Header/Header';
import React from 'react';
import Form from '../common/Form/Form';
import {SWrapper, SMain, SArticle} from './styles/MainPageContent.styled';

export const MainPageContent = () => {
	return (<SWrapper>
		<Header main={true}/>
		<SMain>
			<SArticle>
				Рассчитайте <br />стоимость доставки из Китая
			</SArticle>
			<Form />
		</SMain>
	</SWrapper>);
};
