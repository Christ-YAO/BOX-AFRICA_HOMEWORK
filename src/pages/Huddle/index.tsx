import Header from "../../components/HuddleHeader";
import HeaderTopDiv from "../../components/HuddleTopDiv";
import HuddleFooter from "../../components/HuddleFooter";
import Infos from "../../components/Infos";

function Index() {

  return (
    <>
        <Header />
        <Infos />
        <HeaderTopDiv title="ready to build your community" text="" btn="get started for free" btnLink='/sunnyside' />
        <HuddleFooter />
    </>
  )
}

export default Index