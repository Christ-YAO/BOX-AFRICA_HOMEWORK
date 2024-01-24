import '../../index.css'
import '../../assets/fonts.css'
import TextImgSection from "../../components/TextImgSection";
import Testimonials from "../../components/Testimonials";
import Cards from "../../components/Cards";
import Header from "../../components/SunnySideHeader";
import Images from "../../components/Images";
import Footer from "../../components/SunnySideFooter";

function Index() {
  
  return (
    <>
        <Header />
        <TextImgSection />
        <Cards />
        <Testimonials />
        <Images />
        <Footer />
    </>
  )
}

export default Index