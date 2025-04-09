import React, { useState } from 'react'
import { FormStep } from '../types';
import { useFormContext } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// 
type FormNavigationProps = {
    currentStep: FormStep;
    onNext: () => void;
    onPrev: () => void;
  };


// form navigation
const FormNavigation = ({currentStep, onNext, onPrev}:FormNavigationProps) => {
    const { watch, formState: { isValid } } = useFormContext();
    const formValues = watch();
    const [isLoading, setIsLoading] = useState(false);
    //  
    const {
      personal = { fullName: '', email: '', phoneNumber: '' },
      address = { streetAddress: '', city: '', zipCode: '' },
      account = { username: '', password: '', confirmPassword: '' }
    } = formValues || {}

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
  const mutation = useMutation({
    mutationFn: (formValues:any) => {
      return axios.post('/api/submit', formValues);
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      onNext(); 
    },
    onError: (error) => {
      console.error('Submission error:', error);
      alert('Error submitting form. Please try again.');
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });
  
  // post a info
  const handlePostInfo = async () => {
    if (!isValid) return;
    const data = await mutation.mutateAsync(formValues);
  };

  // 
  const backToHome=()=>{
     redirect('/')
  }
   
   // 
  return (
    <div className='mt-6'>
         {currentStep !== "submited" && currentStep !== "personal"  && <button
          type="button"
          onClick={onPrev}
          className="mr-2 cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          Previous
        </button>}

        {/*  */}
        {currentStep ==="submited"?
          <button
             onClick={backToHome}
             type="button"
             className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
           >
              Back To Home
           </button>
            :  
            <>
              {currentStep !== 'summary' ? (
              <button
                type="button"
                onClick={onNext}
                disabled={!isCurrentStepComplete() || account?.password !== account.confirmPassword}
                className={`
                  rounded-md px-4 py-2 text-sm font-semibold text-gray-100
                  ${!isCurrentStepComplete() || account?.password !== account.confirmPassword 
                    ? "cursor-not-allowed opacity-75 bg-gray-200 text-gray-500" 
                    : "cursor-pointer bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600"
                  }
                `}
              >
                Next
              </button>):(
                  <button
                  onClick={handlePostInfo}
                  type="submit"
                  disabled={isLoading ||!isValid}
                  className="cursor-pointer rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </button>
              )} 
         </>
      }
        
    </div>
  )
}

export default FormNavigation