import styled from '@emotion/styled'
import React from 'react'

export const Header = styled.header<{ bg: string }>`
	font-weight: 600;
	font-family: OpenSans;
	font-size: 20px;
	text-align: center;
	margin-top: 50px;
	background-color: ${(props) => props.bg};
`

interface TestComponentProps {
	bg: string
}

const TestComponent = ({ bg }: TestComponentProps) => {
	return <Header bg={bg}>I am styled component!</Header>
}

export default TestComponent
