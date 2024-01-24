type User = {
    id: string,
    userName: string,
    password: string
  }
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onSubmitForms = (values:User, { setSubmitting }:any) => {
    console.log("form values"), values
    setTimeout(() => {
      console.log(values)
      setSubmitting(true);
      window.location.replace("http://localhost:5173/sunnyside");
    }, 400);
  }