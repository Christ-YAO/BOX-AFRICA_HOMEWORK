/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik } from 'formik';
import LoginForm from "../forms/LoginForm";
import { initialValues } from './initialeValues';
import { validationSchema } from './loginFormsSchema';
import { onSubmitForms } from './onSubmitForms';


function App() {

  return (
    <Formik
          initialValues = {initialValues}
          validationSchema= { validationSchema }
          onSubmit= {onSubmitForms}
    >
            <div className="h-screen w-full bg-teal-500 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-[100%] sm:w-[500px] p-2 xs:p-9">
              <h1 className="text-white uppercase xs:text-2xl font-semibold mb-2">user login</h1>
              <div className="w-14 h-0.5 bg-white"></div>
              <LoginForm />
            </div>
          </div>
    </Formik>
  )
}

export default App
