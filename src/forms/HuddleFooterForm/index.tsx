import { Formik, Form } from 'formik';
import Input from "../../components/Input";
import { validationSchema } from "./ValidatinSchema";
import { initialValues } from "./initialValues";
import { onSubmitForms } from "./onSubmitForms";

function Index() {

  return (
    <Formik
        initialValues = { initialValues }
        validationSchema= { validationSchema }
        onSubmit= { onSubmitForms }
    >
        <Form className="mt-10 flex flex-wrap lg:flex-nowrap flex-col md:flex-row gap-8 items-baseline">
            <div className="flex flex-col gap-8">
                <Input
                label=""
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                />
            </div>
            <input
                type="submit"
                value="Subscribe"
                className="bg-pink-100 outline-none pt-2 pb-3 px-10 font-bold rounded text-pink-400 cursor-pointer hover:bg-pink-400 border-solid border-transparent hover:text-white border-pink-400 transition ease-in-out duration-100 capitalize " />
            
        </Form>
    </Formik>
  )
}

export default Index