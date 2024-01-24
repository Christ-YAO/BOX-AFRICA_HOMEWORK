import { CiUser } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { SlShareAlt } from "react-icons/sl";
import { Form } from 'formik';
import Input from "../../components/Input";

function Index() {
  return (
    <Form /*onSubmit={formik.handleSubmit}*/ className="mt-10 w-full flex flex-col gap-y-8">

      <Input
        label={<CiUser />}
        name="userName"
        id="userName"
        type="text"
        placeholder="UserName"
      />

      <Input
        label={<CiUnlock />}
        name="password"
        id="password"
        type="password"
        placeholder="Password"
      />
      
      <div className="flex justify-center flex-wrap xs:flex-nowrap gap-5">
        <label className="bg-white hidden sm:grid place-content-center rounded-full basis-[10px] p-[15px] text-xl text-teal-500 "><SlShareAlt /></label>
        <input type="submit" value="Login"  className="grow shrink basis-full px-5 py-1 sm:py-3 rounded-full bg-white transition duration-100 cursor-pointer  text-teal-500 uppercase font-bold hover:bg-teal-600 hover:text-white w-full text-xs xs:text-lg "/>
      </div>
      <a href="#" className="text-xs xs:text-lg font-bold text-teal-700 hover:underline text-center">Forgot password?</a>
    </Form>
  )
}

export default Index