import styled from '@emotion/styled'

export const DefaultNotification = styled.article<{ fw: string }>``
export const MainUpNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 130px;
	@media (max-width: 1200px) {
		display: none;
	}
`
export const MainDownNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: -25px;
	right: -107px;
	@media (max-width: 1200px) {
		display: none;
	}
`
export const HeaderNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 329px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 100px;
	left: 320px;
	border-radius: 3px;
	@media (max-width: 1200px) {
		display: none;
	}
`
export const CompleteFormNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 457px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0px;
	right: -60px;
	border-radius: 3px;
	img {
		&:first-of-type {
			margin-right: 20px;
		}
		&:last-child {
			margin-right: -10px;
		}
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const Added1FormNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 638px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 140px;
	left: 560px;
	border-radius: 3px;
	@media (max-width: 1200px) {
		display: none;
	}
`
export const Added2FormNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 457px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 29px;
	right: 550px;
	border-radius: 3px;
	@media (max-width: 1200px) {
		display: none;
	}
`
export const Added3FormNotification = styled.article<{ fw: string }>`
	position: absolute;
	background-color: white;
	min-width: 457px;
	min-height: 55px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 100px;
	right: 100px;
	border-radius: 3px;
	p {
		margin-right: -19px;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const SearchNotification = styled.article<{ fw: string }>`
	position: absolute;
	max-width: 490px;
	min-height: 86px;
	font-weight: ${({ fw }) => fw};
	font-size: 15px;
	line-height: 23px;
	color: #5daaff;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 285px;
	left: 640px;
	border-radius: 3px;
	background-color: white;
	img {
		margin-right: 20px;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`
export const SIconWrapper = styled.span`
	margin-left: 13px;
	margin-right: 13px;
`
export const SHeaderIconWrapper = styled.span`
	margin-left: 13px;
	margin-right: 13px;
`
