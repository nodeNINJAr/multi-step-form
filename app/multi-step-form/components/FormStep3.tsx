import React from 'react'

const FormStep3 = () => {
  return (
    <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username (required, min 4 characters)</label>
            <input
               placeholder='Enter Your Username'
            //   {...register('personal.fullName')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {/* {errors.personal?.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.fullName.message}</p>
            )} */}
          </div>
          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password (required, min 6 characters)</label>
            <input
               placeholder='Enter Your Password'
            //   {...register('personal.fullName')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {/* {errors.personal?.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.fullName.message}</p>
            )} */}
          </div>
           {/* phone number */}
           <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password (must match password)</label>
            <input
                placeholder='Confirm Password'
            //   {...register('personal.fullName')}
              className="mt-1 p-2 border-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {/* {errors.personal?.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.personal.fullName.message}</p>
            )} */}
          </div>
        </div>
  )
}

export default FormStep3