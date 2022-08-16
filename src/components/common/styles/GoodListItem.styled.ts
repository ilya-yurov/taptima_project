import styled from "@emotion/styled";

export const GoodDesktop = styled.section`
	display: flex;
	align-items: center;
	height: 99px;
	background: #F8FAFF;
	border: 1px solid #E2E4EA;
	border-radius: 3px;
	p {
		flex-grow: 1;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 17px;
		color: #606F7A;
	}
	img {
		width: 120px;
		height: 97px;
	}
`;
export const GoodMobile = styled.section`
	justify-content: center;
	display: flex;
	align-items: center;
	height: 60px;
	background: #F8FAFF;
	border: 1px solid #E2E4EA;
	border-radius: 3px;
	p {
		flex-grow: 1;
		margin-left: 36px;
		font-family: 'OpenSans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		color: #606F7A;
	}
	img {
		width: 69px;
		height: 48px;
	}
`;
