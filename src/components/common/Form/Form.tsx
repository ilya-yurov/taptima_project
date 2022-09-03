import {observer} from 'mobx-react-lite'
import mainForm from '../../../store/mainForm'
import MainForm from './MainForm/MainForm'
import SelectForm from './SelectForm/SelectForm'

interface FormProps {
	select?: boolean
}

const Form = observer(({ select }: FormProps) => {
	return (
		<>
			{!select ? (
				<MainForm formData={mainForm.formData} updateMainForm={mainForm.updateForm} currencyData={mainForm.currencyData} cities={mainForm.cities} />
			) : (
				<SelectForm
					formData={mainForm.formData}
					updateMainForm={mainForm.updateForm}
					headerActiveToogle={mainForm.headerActiveToogle}
					updateHeaderToogle={mainForm.updateToogle}
					currencyData={mainForm.currencyData}
					cities={mainForm.cities}
				/>
			)}
		</>
	)
})

export default Form
