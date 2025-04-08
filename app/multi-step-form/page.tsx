'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from './types'
import FormNavigation from './components/FormNavigation'
import useMultiStepForm from './hooks/useMultiStepForm'


// main form
const MultiStepForm = () => {

const {currentStep, handleNext, handlePrev} = useMultiStepForm();


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
            <FormNavigation currentStep={currentStep} onNext={handleNext} onPrev={handlePrev}/>
            <input type="submit" />
          </form>
    </div>
  )
}

export default MultiStepForm