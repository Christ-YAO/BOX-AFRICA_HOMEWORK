import { useField } from 'formik';

interface IndexProps {
    label: string | object;
    id: string;
    type: string
    placeholder: string
    name: string
  }

function Index({...props}:IndexProps) {
    const [field, meta] = useField(props);

  return (
    <div className="flex justify-center items-baseline flex-wrap xs:flex-nowrap w-full gap-5">
        {props.label && 
          <label htmlFor={props.id || props.name} className="bg-white sm:grid place-content-center rounded-full basis-[10px] p-3 text-2xl text-teal-500 hidden ">{props.label}</label>
        }
        
        <div className="block w-full">
          <input 
              {...field}
              {...props}
              className="px-5 py-2 text-xs sm:text-[15px] sm:py-3 rounded-full capitalize lg:min-w-80 w-full outline-none"
              style={{caretColor: "#14b8a6", border : meta.error ? "1.5px solid red" : "1.5px solid transparent"}}
          />
          
          {meta.touched && meta.error ? (
              <div className="text-sm text-red-500 mt-1 ml-3">{meta.error}</div>
          ) : null}
        </div>
    </div>
  )
}

export default Index