import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types';

const FormStep2 = () => {
// 
const { register, formState: { errors },
    } = useFormContext<FormData>();

    
    // 
  return ( 
   <div className="space-y-4">
     <h1 className='text-2xl text-center font-semibold font-sans mb-6 text-gray-700 dark:text-gray-300'>Address Details</h1>
    {/*  */}
     <div>
       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Street Address <strong className='text-red-400 text-lg'>*</strong></label>
        <input
           placeholder='Enter Your Street Address'
           {...register('address.streetAddress')}
           className="placeholder:text-gray-400 text-gray-400  outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         />
         {errors.address?.streetAddress && (
             <p className="mt-1 text-sm text-red-600">{errors.address?.streetAddress.message}</p>
         )}
     </div>

    {/* email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">City <strong className='text-red-400 text-lg'>*</strong></label>
      <input
        placeholder='Enter Your City'
        {...register('address.city')}
        className="placeholder:text-gray-400 text-gray-400  outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.address?.city && (
        <p className="mt-1 text-sm text-red-600">{errors.address?.city.message}</p>
      )}
    </div>

     {/* phone number */}
     <div>
       <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Zip Code <strong className='text-red-400 text-lg'>*</strong></label>
       <input
          placeholder='Enter Your Zip Code'
         {...register('address.zipCode')}
         className="placeholder:text-gray-400 text-gray-400  outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
       />
        {errors.address?.zipCode && (
            <p className="mt-1 text-sm text-red-600">{errors.address?.zipCode.message}</p>
        )}
    </div>
  </div>
  )
}

export default FormStep2