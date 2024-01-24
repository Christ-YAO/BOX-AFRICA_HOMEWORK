import Grow from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/illustration-grow-together.svg";
import Flow from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/illustration-flowing-conversation.svg";
import Users from "../../../huddle-landing-page-with-curved-sections-master/huddle-landing-page-with-curved-sections-master/images/illustration-your-users.svg";
import Info from "../../components/Info";

function Index() {
  return (
    <div className="py-20">
        <Info title="grow together" text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form." img={Grow} />
        <Info title="flowing conversations" text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow." img={Flow}  rowReverse={true} colReverse={true} />
        <Info title="your users" text="It takes no time at all to integrate Huddle with your aoo-s authentication solution. This means, once signed in to your app, your users can start chatting immediately." img={Users} />
    </div>
  )
}

export default Index