import React, { useState } from 'react'

const Contact = () => {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [description, setdescription] = useState();
  const handlesubmit=async (e)=>{
    e.preventDefault();
    const data = {firstname,lastname,email,description};
 
 const res=await fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
let response=await res.json();
console.log(response);
setfirstname('');
setlastname('');
setemail('');
setdescription('');

  }
  const handlechange=(e)=>{
    if(e.target.name==='firstname'){
setfirstname(e.target.value);
    }
   else if(e.target.name==='lastname'){
setlastname(e.target.value);
    }
   else if(e.target.name==='email'){
setemail(e.target.value);
    }
   else if(e.target.name==='description'){
setdescription(e.target.value);
    }
  }
  return (
<section className='w-full h-auto flex flex-col'>
    <div className='text-5xl mt-8 text-center font-serif xsm:text-3xl xsm:mt-10 xsm:flex-wrap' >Contact us
    </div>
   <div className='w-full justify-center flex flex-wrap mt-5'> <div className='w-1/2  text-center justify-center text-lg text-blue-900 font-bold font-sans'>Get in touch and let us know how we can help</div></div>
    <div className='flex mt-20 xsm:mt-10 justify-around'>
        <div className='flex flex-row xsm:inline-block w-1/2 justify-center font-serif
  '>
   <img src="/contact.jpg" className='mr-5 mb-5' alt="" />
 <form action="" method='post' onSubmit={handlesubmit}>
            <label className='' htmlFor="firstname">First Name</label>
            <input onChange={handlechange} value={firstname} name='firstname' type="text" className='flex border-2 mb-2 rounded-lg' />
            <label className='mt-8' htmlFor="lastname">Last Name</label>
            <input onChange={handlechange} value={lastname} name='lastname' type="text" className='flex border-2 mb-2 rounded-lg' />
            <label className='mt-2' htmlFor="email">Email Address</label>
            <input onChange={handlechange} value={email} name='email' type="text" className='flex border-2 mb-2 rounded-lg' />
            <label className='flex' htmlFor="description">What can we help you with?</label>
            <textarea onChange={handlechange} value={description} name="description" id="" className='border-2 rounded-lg' cols=""  rows="2"></textarea>   
            <div className='block '><button className="bg-blue-900 justify-center font-sans mt-2 text-xs hover:bg-blue-800 flex-col text-white font-bold xsm:py-1 xsm:px-3  px-5 py-2 rounded-xl xsm:text-sm">
       Submit
      </button>  </div>        
        </form>
    </div>
   
    </div>
    </section>  )
}

export default Contact