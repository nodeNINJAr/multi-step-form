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
    {/*  */}
     <div>
       <label className="block text-sm font-medium text-gray-700">Street Address (required)</label>
        <input
           placeholder='Enter Your Street Address'
           {...register('address.streetAddress')}
           className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         />
         {errors.address?.streetAddress && (
             <p className="mt-1 text-sm text-red-600">{errors.address?.streetAddress.message}</p>
         )}
     </div>

    {/* email */}
    <div>
      <label className="block text-sm font-medium text-gray-700">City (required)</label>
      <input
        placeholder='Enter Your City'
        {...register('address.city')}
        className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors.address?.city && (
        <p className="mt-1 text-sm text-red-600">{errors.address?.city.message}</p>
      )}
    </div>

     {/* phone number */}
     <div>
       <label className="block text-sm font-medium text-gray-700">Zip Code (required, only numbers, min 5 digits)</label>
       <input
          placeholder='Enter Your Zip Code'
         {...register('address.zipCode')}
         className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
       />
        {errors.address?.zipCode && (
            <p className="mt-1 text-sm text-red-600">{errors.address?.zipCode.message}</p>
        )}
    </div>
  </div>
  )
}

export default FormStep2