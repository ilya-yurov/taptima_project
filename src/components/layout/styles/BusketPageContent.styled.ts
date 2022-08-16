import styled from "@emotion/styled";




export const BusketWrapper = styled.div`
	padding: 49px 97px 0px 97px;
	height: 100vh;
	display: grid;
	grid-template-rows: 40px 135px 90px 1fr;
	gap: 10px;
	@media (max-width: 1200px) {
		width: 375px;
		margin: 0px auto;
		padding: 24px 0px 0px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

export const HeaderWrapper = styled.header`
	@media (max-width: 1200px) {
		padding: 0 20px;
	}
`;

export const BusketHeader = styled.header`
	align-self: center;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 36px;
	color: #606F7A;
	@media (max-width: 1200px) {
		padding: 0 20px;
		font-family: 'OpenSans';
		align-self: flex-start;
		font-style: normal;
		font-weight: 600;
		font-size: 22px;
		margin-bottom: 15px;
		line-height: 20px;
	}
`;

export const SheetHeader = styled.header`
	display: grid;
	grid-template-columns: 120px 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
	text-align: center;
	background-color: #F8FAFF;
	color: #606F7A;
	border-radius: 5px;
	font-family: 'OpenSans';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 14px;
	p {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		border: 1px solid #E2E4EA;
		border-right: none;
		&:last-child {
			border-right: 1px solid #E2E4EA;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
		&:nth-of-type(3) {
			border-top-left-radius: 5px;
			border-bottom-left-radius: 5px;
		}
	}
`;

export const GoodsListWrapper = styled.section`
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	@media (max-width: 1200px) {
		gap: 10px;
	}
`;

export const NoGoodsWrapper = styled.div`
	padding: 49px 97px 0px 97px;
	height: 100vh;
	display: grid;
	grid-template-rows: 40px 1fr;
	gap: 10px;
	section {
		justify-self: center;
		align-self: center;
		margin-bottom: 200px;
		p {
			position: relative;
			font-family: 'OpenSans';
			font-style: normal;
			font-weight: 400;
			font-size: 20px;
			line-height: 30px;
			color: #606F7A;
			p {
				position: static;
			}
		}
	}
	@media (max-width: 1200px) {
		width: 375px;
		margin: 0px auto;
		padding: 24px 0px 0px 0px;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		section {
			margin-top: 100px;
			text-align: center;
		}
	}
`;

export const NoAddButtonWrapper = styled.section`
	position: absolute;
	left: 80px;
	top: 50px;
	@media (max-width: 1200px) {
		top: -25px;
	}
`;
export const AddButtonWrapper = styled.section`
	position: absolute;
	right: 100px;
	bottom: 30px;
	p {
		display: flex;
		gap: 12px;
	}
	@media (max-width: 1200px) {
	position: fixed;
	width: 444px;
	height: 0px;
	top: 50%;
	left: 50%;
	margin-top: 280px;
	margin-left: -250px;
		p{
			flex-direction: row-reverse;
			gap: 0px;
		}
	}
`;
export const Plug = styled.div`
	background-color: #EFF3F9;
`;
