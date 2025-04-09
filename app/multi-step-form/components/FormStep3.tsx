import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const FormStep3 = () => {
  // 
const { register, formState: { errors },
      } = useFormContext<FormData>();
  

  //
  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  // 
  return (
    <div className="space-y-4">
      <h1 className='text-2xl text-center font-semibold font-sans mb-6 text-gray-700 dark:text-gray-300'>Account Setup</h1>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Name <strong className='text-red-400 text-lg'>*</strong></label>
            <input
               placeholder='Enter Your Username'
              {...register('account.userName')}
              className="placeholder:text-gray-400 text-gray-400  outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.account?.userName && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.userName.message}</p>
            )}
          </div>
          {/* password */}
          <div className='relative'>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password <strong className='text-red-400 text-lg'>*</strong></label>
            <input
               type={eye1?"text":"password"}
               placeholder='Enter Your Password'
              {...register('account.password')}
              className="placeholder:text-gray-400 text-gray-400  outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
              {/* eye */}
              <span className='absolute right-3 top-11' onClick={()=>setEye1(!eye1)}>{!eye1?<FaRegEye />: <FaRegEyeSlash />}</span>
            {errors.account?.password && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.password.message}</p>
            )}
          </div>
           {/* confirm password */}
           <div className='relative'>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password </label>
            <input
             type={eye?"text":"password"}
                placeholder='Confirm Password'
              {...register('account.confirmPassword')}
              className="placeholder:text-gray-400 text-gray-400 outline-0 mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {/* eye */}
             <span className='absolute right-3 top-9' onClick={()=>setEye(!eye)}>{!eye?<FaRegEye />: <FaRegEyeSlash />}</span>
             {/*  */}
            {errors.account?.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.account?.confirmPassword.message}</p>
            )}
          </div>
        </div>
  )
}

export default FormStep3