import NavBar from "../../components/HuddleNavBar";
import HuddleFirstDiv from "../../components/HuddleFirstDiv";
import Logo from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/logo.svg";

function Index() {

  return (
    <header className="py-7 px-6 md:px-28">
        <NavBar huddleLogo={Logo} />
        <HuddleFirstDiv />
    </header>
  )
}

export default Index