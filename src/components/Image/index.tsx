type ImgProps = {
  classCss:string,
  img:string,
}

function Index({ classCss, img }:ImgProps) {
  return (
    <div className={classCss}><img src={img} alt="" /></div>
  )
}

export default Index