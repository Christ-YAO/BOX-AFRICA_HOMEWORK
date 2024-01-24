
function index({ ...props }) {
  return (
    <div className="flex md:justify-between flex-col-reverse md:flex-row items-center px-8 sm:px-[60px] md:px-16 lg:px-40 py-20 gap-18" /*style={{flexDirection: props.rowReverse && "row-reverse"}}*/>
        <div className="md:basis-1/2 text-center md:text-left">
            <h2 className="font-bold capitalize text-3xl mb-5">{props.title}</h2>
            <p>{props.text}</p>
        </div>
        <div className="md:basis-[43%] max-w-[450px] lg:basis-[43%] px-6 md:px-0 mb-20">
            <img src={props.img} alt="" className="" />
        </div>
    </div>
  )
}

export default index