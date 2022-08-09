import React from 'react'

const Header = () => {
  return (
    <section className=' w-full h-16 '>
<div className='flex w-full flex-row xsm:block '>
<div className='xsm:w-full  inline-flex xsm:justify-center xsm:flex  h-16'><img className='rounded ' src="/logo.png" alt="" /></div>
        <div className=' inline-flex xsm:flex xsm:justify-center font-bold items-center text-blue-900 cursor-pointer font-serif justify-end w-full'> 
         <div className=' font-serif  hover:text-blue-500 sm:px-3 xsm:px-1 px-8'><a href='/'>Home</a></div>
        <div className='text-grey-800  hover:text-blue-500 sm:px-3 xsm:px-1 px-8 '><a href='/about'>About</a></div>
        <div className='text-grey-800  hover:text-blue-500 sm:px-3 xsm:px-1 px-8 '><a href='/services'>Services</a></div>
        <div className='text-grey-800  hover:text-blue-500 sm:px-3 xsm:px-1 px-8 '><a href='/carrer'>Carrer</a></div>
        <div className='text-grey-800  hover:text-blue-500 sm:px-3 xsm:px-1 px-8 '><a href='/contact'>Contact</a></div>
        </div>
</div>
    </section>
  )
}

export default Header