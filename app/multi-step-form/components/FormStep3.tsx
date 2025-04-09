import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types';

const FormStep3 = () => {
  // 
const { register, formState: { errors },
      } = useFormContext<FormData>();

  // 
  return (
    <div className="space-y-4">
      <h1 className='text-2xl text-center font-semibold font-sans mb-6'>Account Setup</h1>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username (required, min 4 characters)</label>
            <input
               placeholder='Enter Your Username'
              {...register('account.userName')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.account?.userName && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.userName.message}</p>
            )}
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password (required, min 6 characters)</label>
            <input
               placeholder='Enter Your Password'
              {...register('account.password')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.account?.password && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.password.message}</p>
            )}
          </div>
           {/* phone number */}
           <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password (must match password)</label>
            <input
                placeholder='Confirm Password'
              {...register('account.confirmPassword')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.account?.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.confirmPassword.message}</p>
            )}
          </div>
        </div>
  )
}

export default FormStep3