import React from 'react'

const Services = () => {
  return (
    <section className='w-full h-auto flex flex-col'>
    <div className='text-5xl mt-8 text-center font-serif xsm:text-3xl xsm:mt-10' >Our Services
    </div>
   <div className='w-full justify-center flex flex-wrap mt-5'> <div className='w-1/2 xsm:w-2/3 font-serif text-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam impedit modi accusamus doloremque soluta, rerum est cum similique, aspernatur ex optio non minus in, voluptatem nam provident quam consequatur adipisci veritatis deleniti. Blanditiis, molestias veritatis corrupti impedit repellat, corporis mollitia dolor cum minima animi maiores sequi accusamus laboriosam temporibus!</div></div>
   <div className='w-full h-auto'>
    <div className='rounded-full mt-5 flex justify-center '>
    <div className='flex justify-center max-w-2xl  mt-5  flex-wrap'>
        <div className='mt-10 mx-10 w-fit '>
            <img src="web.png" className='rounded-full justify-center h-20 w-22' alt="" />
            <div className='text-center text-xl text-blue-900 mt-2 xsm:text-lg'>Web Design</div>

        </div>
        <div className='mx-10 mt-10  w-fit'>
            <img src="app.png" className='rounded-full  h-20 w-20' alt="" />
            <div className='text-left text-xl text-blue-900 mt-2 xsm:text-lg'>App Design</div>

        </div>
        <div className=' mx-10 mt-10  w-fit'>
            <img src="responsive.png" className='rounded-full  h-20 w-20' alt="" />
            <div className='text-center text-xl text-blue-900 mt-2  xsm:text-lg'>Responsive Design</div>

        </div>
        <div className='mx-10 mt-10 w-fit'>
            <img src="seo.jpg" className='rounded-full h-20 w-20' alt="" />
            <div className='text-center text-xl text-blue-900 mt-2 xsm:text-lg'>Seo Friendly</div>

        </div>
        <div className='mx-10 mt-10  w-fit'>
            <img src="social.jpg" className='rounded-full h-20 w-20' alt="" />
            <div className='text-center text-xl text-blue-900 mt-2 xsm:text-lg'>Social Media</div>

        </div>
        <div className=' mx-10 mt-10  w-fit'>
            <img src="e-commerce.png" className='rounded-full ml-3  h-20 w-20' alt="" />
            <div className='text-center text-xl text-blue-900 mt-2 xsm:text-lg'>E-Commerce</div>

        </div>
    </div>
    </div>
   </div>
    </section>  )
}

export default Services