import Mockups from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/screen-mockups.svg";
import Communities from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/icon-communities.svg";
import Messages from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/icon-messages.svg";
import Count from "../../components/Count";
import Image from "../../components/Image";
import HuddleTopDiv from "../../components/HuddleTopDiv";

function Index() {
  return (
    <div className="m-auto lg:w-[95%]">
        <HuddleTopDiv title="build the community your fans will love" text="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion." btn="get started for free" btnLink='/sunnyside' />
        <Image img={Mockups} classCss="mb-20" />
        <div className="flex flex-col md:flex-row gap-y-20 items-center md:justify-between px-16 lg:w-[85%] m-auto ">
            <Count img={Communities} count="1.4k+" text="Communities formed" />
            <Count img={Messages} count="2.7m+" text="Messages send" />
        </div>
    </div>
  )
}

export default Index