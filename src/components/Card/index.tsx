
function index({...props}) {
  return (
    <div className="m-auto text-center w-full md:w-1/2 relative flex justify-center items-end pb-12 h-[500px]" style={{backgroundImage: props.img, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"}}>
      <div className="w-[60%]">
        <h4 className='capitalize font-bold text-2xl mb-8 text-emerald-900 '>{props.title}</h4>
        <p className='cardFont2 font-semibold text-[14px] text-emerald-800'>{props.text}</p>
      </div>
    </div>
  )
}

export default index