'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from './types'

const MultiStepForm = () => {
   
//react hook form
const { handleSubmit, control,
       formState: { errors,isValid},
      } = useForm<FormData>()

  // form submittion function 
  const onSubmit = (data:FormData)=>{
    console.log(data,"data is here") 
  }



// form step
 const renderSteps =()=>{

 }


    // 
  return (
    <div className='mx-auto max-w-md p-6'>
         <h1 className='text-3xl text-center'>Multi step form</h1>
         {/* form */}
          <form onClick={handleSubmit(onSubmit)}>
            <input type="submit" />
          </form>
    </div>
  )
}

export default MultiStepForm