import Section from "../Section";
import egg from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg" ;
import cap from "../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg" ;

function Index() {
  return (
    <section>
      <Section title="Transform your brand" text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals do most of the marketing for you." img={egg} color="#facc15" />
      <Section title="Stand out to the right audience" text="Using a collaborative formula of designers, researchers, photographers, and copywriters, we'll build and extend your brand in digital places." img={cap} color="#c2410c" reverse={true} />
    </section>
  )
}

export default Index