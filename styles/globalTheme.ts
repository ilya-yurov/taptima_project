import { css } from '@emotion/react'

export const GlobalTheme = css`
	@font-face {
		font-family: OpenSans;
		font-weight: 300;
		src: url('/fonts/OpenSans-Light.ttf');
	}

	@font-face {
		font-family: OpenSans;
		font-weight: 400;
		src: url('/fonts/OpenSans-Regular.ttf');
	}

	@font-face {
		font-family: OpenSans;
		font-weight: 600;
		src: url('/fonts/OpenSans-SemiBold.ttf');
	}

	@font-face {
		font-family: Roboto;
		font-weight: 500;
		src: url('/fonts/Roboto-Medium.ttf');
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: OpenSans;
		font-style: normal;
		background-color: #eff3f9;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	button {
		font-size: 17px;
		line-height: 17px;
	}

	* {
		box-sizing: border-box;
	}

	* {
		padding: 0;
		margin: 0;
		border: 0;
	}
	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	aside {
		display: block;
	}
	html,
	body {
		height: 100%;
		width: 100%;
		font-size: 100%;
		line-height: 1;
		font-size: 14px;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	/* Отвечает за значок глаза в ME */
	input::-ms-reveal {
		width: 0;
		height: 0;
	}
	input::-ms-clear {
		width: 0;
		height: 0;
	}
	button {
		cursor: pointer;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}
	/*--------------------*/

	/* Убираем стрелки у select */
	select {
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	select::-ms-expand {
		display: none;
	}
	/* !Стили для оформления скроллбара */
	/* W3C standard
   сейчас только для Firefox */
	* {
		scrollbar-width: thin;
		scrollbar-color: blue #8c8c8c26;
	}

	/* для Chrome/Edge/Safari */
	*::-webkit-scrollbar {
		height: 12px;
		width: 4px;
	}
	*::-webkit-scrollbar-track {
		background: #8c8c8c26;
	}
	*::-webkit-scrollbar-thumb {
		background-color: #bdcbe0;
		border-radius: 5px;
		border: 2px solid #8c8c8c26;
	}
`
