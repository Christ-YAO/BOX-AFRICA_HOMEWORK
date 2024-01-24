
function Index({...props}) {
  return (
    <>
        <li className={props.classCss} title={props.title}><a href={props.link}>{props.icon}</a></li>
    </>
  )
}

export default Index