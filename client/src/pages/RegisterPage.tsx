import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { TbPassword } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'
import * as yup from 'yup'
import SubmitButton from '../components/SubmitButton'
import { Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
const RegisterPage = () => {
  
        const [toggle,setToggle] = useState(false)

            type RegisterInputs={
                name:string
                email:string
                password:string
            }

            const initialValues:RegisterInputs ={
              name:'',
              email:'',
                password:''
            }

            const validationSchema= yup.object({
                name:yup.string().required("name is Required"),
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
                                    <label htmlFor="name">Name <span className="text-red-500 text-sm">*</span> </label>
                                        <div className="flex items-center gap-x-2 border-2 px-4 ">
                                      <CiUser className='text-3xl' />
                                        <Field id="name" name="name" placeholder="enter Your Name" className="w-full py-2 px-4 outline-none border-none bg-transparent  " />
                                        </div>
                                </div>
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
                            <div className="mb-3 ">
                              <SubmitButton value='Register' className='bg-yellow-500 px-5 py-3 rounded-md' />
                            
                            </div>
                            <div className="mb-3">
                            <p className="text-bold text-center">Already Have An Account?<Link className='text-yellow-300' to={'/login'}> Login</Link></p>
                            </div>

                    </Form>

                    </Formik>
                </section>
    
    </>
  )
}

export default RegisterPage