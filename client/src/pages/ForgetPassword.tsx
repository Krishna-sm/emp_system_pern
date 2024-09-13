import { Field, Form, Formik } from 'formik'
import { TfiEmail } from 'react-icons/tfi'
import * as yup from 'yup'
import SubmitButton from '../components/SubmitButton'
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
  

            type ForgetPassword={
                email:string
            }

            const initialValues:ForgetPassword ={
            
              email:''
            }

            const validationSchema= yup.object({
                email:yup.string().required("Email is Required")
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
                              
                            <div className="mb-3 ">
                              <SubmitButton value='Forget' className='bg-yellow-500 px-5 py-3 rounded-md' />
                            
                            </div>
                            <div className="mb-3">
                            <p className="text-bold text-center">Already Know<Link className='text-yellow-300' to={'/login'}> Login</Link></p>
                            </div>

                    </Form>

                    </Formik>
                </section>
    
    </>
  )
}

export default ForgetPassword