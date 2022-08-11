import styled from "@emotion/styled"
import {useRouter} from "next/router"
import {Header} from "../../src/components/Header"

const SelectPage = () => {

	const router = useRouter()
	const StyledWrapper = styled.div`
		height: 100vh;
		padding: 49px 97px 0px 97px;
		font-size: 30px;
		@media (max-width: 1200px) {
			margin: 0px auto;
			max-width: 380px;
			background: none;
			padding: 24px 20px 0px 20px;
		}
	`

	return (
		<StyledWrapper>
			<Header select={true}/>
		</StyledWrapper>
	)
}

export default SelectPage
