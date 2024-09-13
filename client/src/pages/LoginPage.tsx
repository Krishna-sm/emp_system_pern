import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { TbPassword } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'
import * as yup from 'yup'
import SubmitButton from '../components/SubmitButton'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  
        const [toggle,setToggle] = useState(false)

            type LoginInputs={
                email:string
                password:string
            }

            const initialValues:LoginInputs ={
                email:'',
                password:''
            }

            const validationSchema= yup.object({
                email:yup.string().required("Email is Required"),
                password:yup.string().required()
            })

            const submitHandler =()=>{}
  
    return (
    <>

                <section className="min-h-[80vh] flex flex-col justify-center items-center ">
                    <Formik validationSchema={validationSchema} initialValues={initialValues} 
                    onSubmit={submitHandler}
                    >   

                    <Form className=' w-[96%] lg:w-[60%] xl:w-1/2 mx-auto bg-white/5 p-10 rounded-md shadow-md'>
                                <div className="mb-3">
                                    <label htmlFor="email">Email <span className="text-red-500 text-sm">*</span> </label>
                                        <div className="flex items-center gap-x-2 border-2 px-4 ">
                                      <TfiEmail className='text-3xl' />
                                        <Field id="email" name="email" placeholder="enter email Address" className="w-full py-2 px-4 outline-none border-none bg-transparent  " />
                                        </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password <span className="text-red-500 text-sm">*</span> </label>
                                        <div className="flex items-center gap-x-2 border-2 px-4 ">
                                      <TbPassword  className='text-3xl' />
                                        <Field type={toggle?"text":"password"} id="password" name="password" placeholder="enter Password" className="w-full py-2 px-4 outline-none border-none bg-transparent  " />
                                       {toggle? <GoEye onClick={()=>setToggle(!toggle)} className='text-3xl' /> 
                                      :  <GoEyeClosed onClick={()=>setToggle(!toggle)} className='text-3xl'  />}
                                        </div>
                                </div>
                            <div className="mb-3 flex items-center justify-between">
                              <SubmitButton value='Login' className='bg-yellow-500 px-5 py-3 rounded-md' />
                              <p className="text-bold"><Link className='text-yellow-300' to={'/forget-password'}>Forget Password</Link></p>
                            </div>
                            <div className="mb-3">
                            <p className="text-bold text-center">Don't Have An Account?<Link className='text-yellow-300' to={'/register'}> Register</Link></p>
                            </div>

                    </Form>

                    </Formik>
                </section>
    
    </>
  )
}

export default LoginPage