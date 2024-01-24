import Thomas from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-thomas.jpg" ;
import Emily from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-emily.jpg" ;
import Jennie from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/image-jennie.jpg" ;
import Testimonial from "../../components/Testimonial";

function Index() {
  return (
    <div className="text-center py-40">
      <h2 className='font-bold text-gray-400 font-serif uppercase mb-20 text-xl tracking-widest'>client testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-y-20 m-auto max-w-[500px] md:max-w-[100%] w-[80%] md:w-[60%] lg:w-[100%] items-center justify-around md:px-[5%]">
        <Testimonial img={Emily} text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit." name="emily r." work="marketing director" />
        <Testimonial img={Thomas} text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." name="thomas s." work="chief operating officer" />
        <Testimonial img={Jennie} text="Incredible and result! Our sales increased over 400% when we worked Sunnyside. Highly recommended!" name="jennie f." work="business owner" />
      </div>
    </div>
  )
}

export default Index