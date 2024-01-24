import * as Yup from "Yup";

export const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'Votre userName doit contenir au moins 3 caractères !')
      .required('Veuillez remplir ce champs svp !'),
    password: Yup.string()
      .min(4, 'Votre password doit contenir au moins 4 caractères !')
      .required('Veuillez remplir ce champs svp !'),
  })