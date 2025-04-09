import React from 'react'
import { useFormContext } from 'react-hook-form'

const FormSummary = () => {
  const {watch} = useFormContext(); 
   const allValues = watch();
   
  // 
  return (
    <div className='text-black'>
          <h1 className='text-2xl text-center font-semibold font-sans mb-6 text-gray-700 dark:text-gray-400'>Form summary</h1>
          {/*  */}
          <div className='text-gray-700 dark:text-gray-400'>
            <h3 className='text-lg font-semibold border-b border-gray-500 mb-2 text-gray-700 dark:text-gray-300'>Personal Information</h3>
            <p>Name: {allValues.personal?.fullName}</p>
            <p>Email: {allValues.personal?.email}</p>
            <p>Phone: {allValues.personal?.phoneNumber}</p>
            <h3 className='text-lg font-semibold border-b border-gray-500 mb-2 text-gray-700 dark:text-gray-300'>Address Details</h3>
             <p>Street Address: {allValues.address?.streetAddress}</p> 
             <p>City: {allValues.address?.city}</p>
             <p>Zip Code: {allValues.address?.zipCode}</p>
             {/*  */}
             <h3 className='text-lg font-semibold border-b border-gray-500 mb-2 text-gray-700 dark:text-gray-300'>Account Setup</h3>
             <p>User Name: {allValues.account?.userName}</p> 
             <p>Password: {allValues.account?.password}</p>
             <p>Confirm Password: {allValues.account?.confirmPassword}</p>
          </div>
    </div>
  )
}

export default FormSummary