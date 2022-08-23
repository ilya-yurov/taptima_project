import { connect } from 'react-redux'
import { IFormData, updateMainForm, updateHeaderToogle, ICurrencyData } from '../../../redux/mainFormReducer'
import MainForm from './MainForm/MainForm'
import SelectForm from './SelectForm/SelectForm'

interface FormProps {
	formData: IFormData
	select?: boolean
	mobile?: boolean
	headerActiveToogle: boolean
	updateMainForm: (formData: IFormData) => { type: string; payload: IFormData }
	updateHeaderToogle: (status: boolean) => { type: string; payload: boolean }
	currencyData: ICurrencyData[]
	cities: string[]
}

const Form = ({ formData, select, updateMainForm, headerActiveToogle, updateHeaderToogle, currencyData, cities }: FormProps) => {
	return (
		<>
			{!select ? (
				<MainForm formData={formData} updateMainForm={updateMainForm} currencyData={currencyData} cities={cities} />
			) : (
				<SelectForm
					formData={formData}
					updateMainForm={updateMainForm}
					headerActiveToogle={headerActiveToogle}
					updateHeaderToogle={updateHeaderToogle}
					currencyData={currencyData}
					cities={cities}
				/>
			)}
		</>
	)
}
const mapStateToProps = (state: any) => ({
	formData: state.mainForm.formData,
	currencyData: state.mainForm.currencyData,
	cities: state.mainForm.cities,
	headerActiveToogle: state.mainForm.headerActiveToogle,
})
export default connect(mapStateToProps, { updateMainForm, updateHeaderToogle })(Form)
