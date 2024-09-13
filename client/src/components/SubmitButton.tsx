import  { ButtonHTMLAttributes } from 'react'
import { CgSpinner } from 'react-icons/cg'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
        value:string,
        isLoading?:boolean
        className?:string
}

const SubmitButton = (props:ButtonProps) => {
  return (
    <button disabled={props.isLoading} {...props}   className={`flex items-center gap-x-2 disabled:bg-yellow-600 ${props.className}`}>{props.value}
    {props.isLoading&&<CgSpinner className='animate-spin text-xl text-white' />}</button>
  )
}

export default SubmitButton