import React, { useState } from 'react'
import { FormStep } from '../types';

const useMultiStepForm = () => {

 // 
 const [currentStep, setCurrentStep] = useState<FormStep>("personal");
 const [direction, setDirection] = useState<"forward" | "backward">("forward")
  //next function
  const handleNext =()=>{
     setDirection("forward")
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
    setDirection("backward")
       // form steps array
    const steps: FormStep[] = ['personal', 'address', 'account', 'summary'];
    const currentIndex = steps.indexOf(currentStep);
    // 
    if(currentIndex > 0){
        setCurrentStep(steps[currentIndex - 1])
    }
  }


  // 
  return {currentStep, handleNext, handlePrev, direction}
}

export default useMultiStepForm