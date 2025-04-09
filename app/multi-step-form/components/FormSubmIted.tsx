import Image from 'next/image'
import React from 'react'

const FormSubmIted = () => {
  return (
    <div>
         <h2 className='text-center font-medium text-gray-600'>Information Submited To Database</h2>
         <Image src={'/assets/animation.gif'} alt='animation' width={300} height={300} className='mx-auto'/>
    </div>
  )
}

export default FormSubmIted