import React from 'react'
import { FormStep } from '../types';

// 
type FormNavigationProps = {
    currentStep: FormStep;
    onNext: () => void;
    onPrev: () => void;
    isSubmitting?: boolean;
  };


// form navigation
const FormNavigation = ({currentStep, onNext, onPrev, isSubmitting}:FormNavigationProps) => {

   // 
  return (
    <div className='mt-6'>
         {currentStep !== "personal" && <button
          type="button"
          onClick={onPrev}
          className="rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Previous
        </button>}
        {currentStep !== 'summary' ? (
        <button
          type="button"
          onClick={onNext}
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Next
        </button>):(
             <button
             type="submit"
             disabled={isSubmitting}
             className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
           >
             {isSubmitting ? 'Submitting...' : 'Submit'}
           </button>
        )} 
    </div>
  )
}

export default FormNavigation