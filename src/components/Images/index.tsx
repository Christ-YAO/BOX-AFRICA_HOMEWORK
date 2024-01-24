import milk from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg" ;
import orange from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg" ;
import cone from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg" ;
import sugar from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg" ;
import Image from "../Image";

function Index() {
  return (
    <div className=" flex w-full flex-wrap">
        <Image img={milk} classCss="basis-1/2 md:basis-[25%]" />
        <Image img={orange} classCss="basis-1/2 md:basis-[25%]" />
        <Image img={cone} classCss="basis-1/2 md:basis-[25%]" />
        <Image img={sugar} classCss="basis-1/2 md:basis-[25%]" />
    </div>
  )
}

export default Index