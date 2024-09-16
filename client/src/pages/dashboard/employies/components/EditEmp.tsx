import { Button, Dialog, DialogPanel } from '@headlessui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { GoPlusCircle } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'
import * as yup from 'yup'
export default function EditEmp({id}:{id:number}) {
  let [isOpen, setIsOpen] = useState(false)


  type AppEmpInputs={
        title:string,
        desc:string
  }

        const initalValues:AppEmpInputs={
            title:'',
            desc:''
        }
        const validationSchema=yup.object({
            title:yup.string().required("Title is Required"),
            desc:yup.string().required("Desc is Required")
        })

        const OnSubmitHandler = (e:AppEmpInputs,{resetForm}:any)=>{
                    console.log(e);
                    resetForm()
        }


  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="px-5 py-2 rounded-md flex items-center gap-x-2 bg-red-500"
      >
         Edit <GoPlusCircle/>
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-2xl rounded-xl bg-slate-900 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
            <div className="flex items-center justify-between">
            {/* <DialogTitle as="h3" className="text-base/7 font-medium text-white">
               
              </DialogTitle> */}
              <h3  className="  font-medium text-white">
              Edit Old Category {id}
              </h3>
              <button  onClick={close} className="p-2 text-3xl bg-slate-700 rounded-full text-white">
                <MdOutlineClose/> 
              </button>
            </div>
                        <Formik initialValues={initalValues} validationSchema={validationSchema}
                        onSubmit={OnSubmitHandler} >
                            <Form className='py-3'>

                                        <div className="mb-3">
                                            <Field name="title" placeholder='Enter Category Title' type="text" className="w-full px-3 py-2 rounded-md ring-2 ring-gray-800 outline-none bg-transparent" />
                                            <ErrorMessage component={'p'} className='text-sm text-red-500' name='title' />
                                        </div>
                                        <div className="mb-3">
                                            <Field  as="textarea" name="desc" placeholder='Enter Category Desc' type="text" className="w-full px-3 py-2 rounded-md ring-2 ring-gray-800 outline-none bg-transparent" />
                                            <ErrorMessage component={'p'} className='text-sm text-red-500' name='desc' />
                                        </div>
                                        <div className="mt-4 ">
                <Button
                type='submit'
                  className="inline-flex  w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                 
                >
                 Sumbit
                </Button>
              </div>
                            </Form>
                        </Formik>
                <div className="flex items-end gap-x-4 justify-end w-full">
                <Button
                type='submit'
                  className="inline-flex   justify-center items-center gap-2 rounded-md bg-teal-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  "
                 
                >
                 Unpublish 
                </Button>
                <Button
                type='submit'
                  className="inline-flex   justify-center items-center gap-2 rounded-md bg-red-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  "
                 
                >
                 Delete 
                </Button>
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
