export const isValidFieldCheck = (string: string) => {
	if (!isNaN(Number(string)) && Number(string) > 0 && !string.includes('-'))
		return true
	else
		return false
}

export const setClear = (string: string, substring: string) => {
	let result:string = string.replace(` ${substring}`, '')
	return result
}

export const setCorrectValue = (string: string, substring?: any) => {
	let currentValue:string = setClear(string, substring)
	if (isValidFieldCheck(currentValue))
		if (currentValue.length > 0 && substring)
			return (currentValue + ' ' + substring)
		else
			return (currentValue)
	else
		return ''
}

export const clearLetters = (string: string) => {
	return string.replace(/[^0-9]/g,"")
}
