import React, { useState } from 'react'
import { FormStep } from '../types';

const useMultiStepForm = () => {

 // 
 const [currentStep, setCurrentStep] = useState<FormStep>("personal");
  //next function
  const handleNext =()=>{
    // form steps array
    const steps: FormStep[] = ['personal', 'address', 'account', 'summary'];
    const currentIndex = steps.indexOf(currentStep);
    // 
    if(currentIndex < steps.length){
        setCurrentStep(steps[currentIndex + 1])
    }
  } 
  // prev function
  const handlePrev =()=>{
       // form steps array
    const steps: FormStep[] = ['personal', 'address', 'account', 'summary'];
    const currentIndex = steps.indexOf(currentStep);
    // 
    if(currentIndex > 0){
        setCurrentStep(steps[currentIndex - 1])
    }
  }


  // 
  return {currentStep, handleNext, handlePrev}
}

export default useMultiStepForm