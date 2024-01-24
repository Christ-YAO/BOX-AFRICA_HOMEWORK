function index({...props}) {
  return (
    <div className="block">
        <img src={props.img} alt="" className="h-6 mb-1" />
        <span className="text-[70px] font-bold">{props.count}</span>
        <p className="capitalize text-gray-400 mt-1">{props.text}</p>
    </div>
  )
}

export default index