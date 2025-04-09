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
import FormSubmIted from './components/FormSubmIted';
import ThemeToggle from './components/theme-toggle';


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
      setFormData(data)

  }


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
            case 'submited' :
              return <FormSubmIted/>;  
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
    <div className='dark:text-gray-300 mx-auto w-full bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 px-6 py-4 sm:p-2 min-h-screen flex justify-center items-center text-gray-300'>
         <div className='absolute right-2 top-2'> <ThemeToggle/></div>
        <div className='bg-white dark:bg-gray-700 w-full xs:w-4/5 sm:w-3/5 lg:max-w-xl mx-auto p-8 rounded-2xl overflow-hidden border-t-2 border-teal-600'>
          <h1 className='text-3xl text-center capitalize mb-8 font-bold text-gray-500 dark:text-gray-200'>Multi step form</h1>
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
                <FormNavigation currentStep={currentStep} onNext={handleNext} onPrev={handlePrev}/>
            </form>
           </FormProvider>
        </div>
    </div>
  )
}

export default MultiStepForm