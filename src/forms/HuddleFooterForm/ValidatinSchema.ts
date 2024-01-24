import * as Yup from "Yup";

export const validationSchema = Yup.object({
    email: Yup.string()
    .email('Invalid email address')
    .required('Veuillez remplir ce champs svp !')
})