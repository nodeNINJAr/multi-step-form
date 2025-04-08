'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from './types'
import FormNavigation from './components/FormNavigation'
import useMultiStepForm from './hooks/useMultiStepForm'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormSummary from './components/FormSummary'


// main form
const MultiStepForm = () => {
// 
const {currentStep, handleNext, handlePrev} = useMultiStepForm();

//react hook form
const { handleSubmit, control,
       formState: { errors,isValid},
      } = useForm<FormData>()

  // form submittion function 
  const onSubmit = (data:FormData)=>{
    console.log(data,"data is here") 
  }


//    const steps: FormStep[] = ['personal', 'address', 'account', 'summary'];
// form step
 const renderStep =()=>{
     switch(currentStep){
         case 'personal':
            return <FormStep1/>;
         case 'address' :
            return <FormStep2/>;
         case 'account' :
            return <FormStep3/>;
         case 'summary' :
            return <FormSummary/>;
         default :
            return null;
     }
 }


  // 
  return (
    <div className='mx-auto w-full bg-gray-500 p-2 min-h-screen flex justify-center items-center'>
        <div className='bg-white w-2/5 mx-auto p-8 rounded-2xl'>
          <h1 className='text-3xl text-center capitalize mb-8 font-bold'>Multi step form</h1>
         {/* form */}
          <form onClick={handleSubmit(onSubmit)}>
            {/* forms */}
              {renderStep()}
              {/* navigation */}
            <FormNavigation currentStep={currentStep} onNext={handleNext} onPrev={handlePrev}/>
          </form>
        </div>
    </div>
  )
}

export default MultiStepForm