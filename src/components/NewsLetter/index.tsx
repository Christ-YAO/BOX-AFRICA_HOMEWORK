import HuddleFooterForm from "../../forms/HuddleFooterForm";

function Index() {
  return (
    <div className="basis-[50%] md:pt-16 lg:pt-4 mb-16 max-w-[400px] m-auto ">
        <h3 className="uppercase mb-5 font-bold">newsletter</h3>
        <p className="md:w-[300px]">To recieve tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address.</p>
        <HuddleFooterForm />
    </div>
  )
}

export default Index