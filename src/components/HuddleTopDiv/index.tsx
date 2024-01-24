import { useNavigate } from 'react-router-dom';

function Index({ title, text, btn, btnLink }) {
    const navigate = useNavigate();

  return (
    <div className="mb-36 text-center">
        <h2 className="font-bold capitalize text-4xl mb-6">{title}</h2>
        <p className="w-[95%] md:w-[80%] lg:w-[55%] m-auto mb-8">{text}</p>
        <button onClick={() => navigate(`${btnLink}`)} className="bg-[#fce7f3aa] outline-none pt-2 pb-3 px-14 rounded-full text-pink-400 cursor-pointer hover:bg-pink-400 border-solid border-transparent hover:text-white border-pink-400 transition ease-in-out duration-100 capitalize">{btn}</button>
    </div>
  )
}

export default Index