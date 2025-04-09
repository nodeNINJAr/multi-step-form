import React from 'react'
import { FormStep } from '../types';
import { useFormContext } from 'react-hook-form';

// 
type FormNavigationProps = {
    currentStep: FormStep;
    onNext: () => void;
    onPrev: () => void;
    isSubmitting?: boolean;
  };


// form navigation
const FormNavigation = ({currentStep, onNext, onPrev, isSubmitting}:FormNavigationProps) => {
    const { watch, formState: { isValid } } = useFormContext()
    const formValues = watch()
  
    const {
      personal = { fullName: '', email: '', phoneNumber: '' },
      address = { streetAddress: '', city: '', zipCode: '' },
      account = { username: '', password: '', confirmPassword: '' }
    } = formValues || {}

  console.log(personal,address,account);
  //   
  const isCurrentStepComplete = () => {
    switch (currentStep) {
      case 'personal':
        return !!personal.fullName && !!personal.email && !!personal.phoneNumber
      case 'address':
        return !!address.streetAddress && !!address.city && !!address.zipCode
      case 'account':
        return !!account.userName && !!account.password && !!account.confirmPassword
      default:
        return true
    }
  }


   // 
  return (
    <div className='mt-6'>
         {currentStep !== "personal" && <button
          type="button"
          onClick={onPrev}
          className="mr-2 cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
        >
          Previous
        </button>}
        {currentStep !== 'summary' ? (
        <button
          type="button"
          onClick={onNext}
          disabled={!isCurrentStepComplete()}
          className="cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          Next
        </button>):(
             <button
             type="submit"
             disabled={isSubmitting || !isValid}
             className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
           >
             {isSubmitting ? 'Submitting...' : 'Submit'}
           </button>
        )} 
    </div>
  )
}

export default FormNavigation