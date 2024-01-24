import '../../assets/fonts.css'

function index({...props}) {
  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-row items-center }" style={{flexDirection:props?.reverse && "row-reverse"}}>
        <div className="grow shrink basis-1/2 py-20 md:py-0 px-[10%] sm:px-[20%] md:px-[5%] lg:px-[9%] gap-x-5 text-center md:text-left">
            <h2 className="font-bold text-3xl mb-7 tracking-wider cardFont lg:text-4xl">{props.title}</h2>
            <p className="text-gray-500 mb-7">{props.text}</p>
            <button className="uppercase font-bold cardFont tracking-wider select-none transition-all duration-200 hover:tracking-widest">Learn more<div className='h-2 rounded-full w-[110%] -ml-2 -mt-2' style={{background:props.color}}></div></button>
            
        </div>
        <div className="grow shrink basis-1/2">
            <img src={props.img} alt="" />
        </div>
    </div>
  )
}

export default index