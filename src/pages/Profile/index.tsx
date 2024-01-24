import { useParams } from 'react-router-dom';


function Profile() {
    type ParamsType = {
        id: string;
    };
  
    const { id } = useParams<ParamsType>()

    // console.log(id);
    
  return (
    <div className="p-5 text-center">
      <p className='font-bold'>WELCOME <span className='text-white bg-teal-500 p-2'>{id}</span></p>
    </div>
  )
}

export default Profile