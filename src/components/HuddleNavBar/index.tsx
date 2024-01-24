import { useNavigate } from 'react-router-dom';

function Index({...props}) {
    const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center mb-[20%]">
        <img src={props.huddleLogo} alt="" className="h-5" />
        <button onClick={() => navigate('/sunnyside')} className="bg-pink-400 outline-none py-1 pb-2 px-7 rounded-full text-white cursor-pointer hover:bg-[#fce7f3aa] border-solid border-transparent hover:text-pink-400 border-pink-400 transition ease-in-out duration-100 capitalize">Try Free</button>
    </nav>
  )
}

export default Index