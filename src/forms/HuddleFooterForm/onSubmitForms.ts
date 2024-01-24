type Email = {
    email:string
}
  
export const onSubmitForms = (values:Email, { setSubmitting }:{setSubmitting:(isSubmit:boolean)=>void}) => {
    setTimeout(() => {
    console.log(values)
    setSubmitting(true);
    window.location.replace("http://localhost:5173/sunnyside");
    }, 400);
}