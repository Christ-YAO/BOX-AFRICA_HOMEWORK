import FooterLeft from "../FooterLeft";
import NewsLetter from "../NewsLetter";

function Index() {

  return (
    <footer className="text-gray-300 flex flex-col-reverse md:flex-row px-14 lg:px-20 justify-between py-40 text-sm huddleFooter ">
        <FooterLeft />
        <NewsLetter />
    </footer>
  )
}

export default Index