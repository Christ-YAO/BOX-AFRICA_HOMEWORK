import Card from "../../components/Card";

function Index() {
  return (
    <div className="flex flex-col md:flex-row">
      <Card title="graphic design" text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention." img="url('../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-graphic-design.jpg')" />
      <Card title="photography" text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image." img="url('../../../sunnyside-agency-landing-page-main/sunnyside-agency-landing-page-main/images/desktop/image-photography.jpg')" />
    </div>
  )
}

export default Index