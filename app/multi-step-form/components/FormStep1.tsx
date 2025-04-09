'use client'
import React from 'react'
import { useFormContext } from 'react-hook-form';
import { FormData } from '../types';

const FormStep1 = () => {
    const {
        register,
        formState: { errors },
      } = useFormContext<FormData>();
       

    //   
      return (
        <div className="space-y-4">
           <h1 className='text-2xl text-center font-semibold font-sans mb-6'>Personal Information</h1>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              placeholder='Enter Your Name'
              {...register('personal.fullName')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.personal?.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.fullName.message}</p>
            )}
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
               placeholder='Enter Your Email'
              {...register('personal.email')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.personal?.email && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.email.message}</p>
            )}
          </div>
           {/* phone number */}
           <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              placeholder='Enter Your Number' 
              {...register('personal.phoneNumber')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.personal?.phoneNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.phoneNumber.message}</p>
            )}
          </div>
        </div>
      );
}

export default FormStep1