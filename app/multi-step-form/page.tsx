'use client'

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form'
import { FormData } from './types'
import FormNavigation from './components/FormNavigation'
import useMultiStepForm from './hooks/useMultiStepForm'
import FormStep1 from './components/FormStep1'
import FormStep2 from './components/FormStep2'
import FormStep3 from './components/FormStep3'
import FormSummary from './components/FormSummary'
import { formSchema } from './schema'
import { AnimatePresence } from 'framer-motion';
import { motion } from "motion/react"


// main form
const MultiStepForm = () => {
// 
const {currentStep, handleNext, handlePrev, direction} = useMultiStepForm();
const [formData, setFormData] = useState({});
console.log(formData);

//react hook form
const methods = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: 'onSubmit',
        defaultValues: {
          personal: {
            fullName: '',
            email: '',
            phoneNumber: '',
          },
          address: {
            streetAddress: '',
            city: '',
            zipCode: '',
          },
          account: {
            userName: '',
            password: '',
            confirmPassword: '',
          },
        },
      })

  // form submittion function 
  const onSubmit = async(data:FormData)=>{
       await setFormData(data)
    // console.log(data,"data is here");
    const res = await fetch('http://localhost:3000/api/submit',{
      method:"POST",
      body:JSON.stringify(data)
    });
    const postRes = await res.json()
    console.log(postRes);
  }
// handle submit
// const handleSubmit=()=>{
    
// }




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
  

  // Animation variants
  const variants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? 100 : -100,
      opacity:0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? -100 : 100,
      opacity: 0
    })
  };

  // 
  return (
    <div className='mx-auto w-full bg-gray-500 p-2 min-h-screen flex justify-center items-center text-gray-700'>
        <div className='bg-white w-2/5 mx-auto p-8 rounded-2xl overflow-hidden border-t-2 border-teal-600'>
          <h1 className='text-3xl text-center capitalize mb-8 font-bold'>Multi step form</h1>
         {/* form */}
           <FormProvider {...methods}>
            <form onClick={methods.handleSubmit(onSubmit)}>
               <AnimatePresence mode='wait' custom={direction}>
                   <motion.div 
                     key={currentStep}
                     custom={direction}
                     variants={variants}
                     initial="enter"
                     animate="center"
                     exit="exit"
                     transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
                     className="overflow-hidden"
                   >
                    {/*forms */}
                     {renderStep()} 
                   </motion.div>
               </AnimatePresence>
                {/* navigation */}
                <FormNavigation isSubmitting={methods.formState.isSubmitting} currentStep={currentStep} onNext={handleNext} onPrev={handlePrev}/>
            </form>
           </FormProvider>
        </div>
    </div>
  )
}

export default MultiStepForm