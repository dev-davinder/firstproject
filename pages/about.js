import React from 'react'

const About = () => {
  return (
 <section className='w-full h-auto flex flex-col'>
    <div className='text-5xl mt-8 text-center font-serif xsm:text-3xl xsm:mt-10' >About us
    </div>
   <div className='w-full justify-center flex flex-wrap mt-5'> <div className='w-1/2 xsm:w-2/3 font-serif text-center justify-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quisquam impedit modi accusamus doloremque soluta, rerum est cum similique, aspernatur ex optio non minus in, voluptatem nam provident quam consequatur adipisci veritatis deleniti. Blanditiis, molestias veritatis corrupti impedit repellat, corporis mollitia dolor cum minima animi maiores sequi accusamus laboriosam temporibus!</div></div>
   <div>
    <div className='rounded-full mt-5'>
    <div className='text-center text-3xl font-serif xsm:text-2xl'>The Team</div>
    <div className='w-full flex justify-center space-x-2 mt-5 flex-wrap'>
        <div className=' flex-col justify-center w-fit mx-5'>
            <img src="dp.jpg" className='rounded-full  h-20 w-22' alt="" />
            <div className='text-left flex-wrap '>Rakesh (CEO)</div>

        </div>
        <div className=' flex-col justify-center w-fit mx-5'>
            <img src="dp.jpg" className='rounded-full mx-5 h-20 w-22' alt="" />
            <div className='text-center flex-wrap '>John(CFO)</div>

        </div>
        <div className=' flex-col justify-center w-fit mx-5'>
            <img src="dp.jpg" className='rounded-full mx-5 h-20 w-22' alt="" />
            <div className='text-center'>Rajesh(COO)</div>

        </div>
    </div>
    </div>
   </div>
    </section>
  )
}

export default About