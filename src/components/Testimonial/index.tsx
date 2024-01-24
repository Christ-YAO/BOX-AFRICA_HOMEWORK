
function Index({...props}) {
  return (
    <div className="lg:max-w-[30%] flex flex-col items-center hover:bg-zinc-100 rounded-xl py-9 px-7">
      <div className="rounded-full overflow-hidden h-[100px] w-[100px] mb-14 select-none">
        <img src={props.img} alt="" className='object-cover h-full' />
      </div>
      <p className='mb-10 font-semibold text-gray-600 cardFont2 text-[13px] leading-7'>{props.text}</p>
      <h4 className='font-bold mb-2 cardFont tracking-wider capitalize'>{props.name}</h4>
      <p className='text-neutral-400 cardFont3 text-sm'>{props.work}</p>
    </div>
  )
}

export default Index