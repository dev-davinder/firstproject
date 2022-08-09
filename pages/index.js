export default function Home() {
  return (<>
    <div className="relative h-fit mt-10 pl-4 xsm:mr-5 max-h-2xl">
   <div className="left w-1/2 bg-blue-100 max-w-2xl rounded-xl mt-10 xsm:justify-center flex-wrap xsm:w-full">
        <div className="text-5xl p-5 mt-5 font-extrabold sm:text-3xl font-mono xsm:text-xl">The Most Professional Open Source Tool
          <button className="bg-blue-900 flex flex-col font-sans mt-14 sm:text-xl text-2xl hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-3xl xsm:text-sm">
          Get started &rarr;
        </button>
        </div>
        <h5 className=" text-xl  p-5 font-mono font-semibold  " >The #1 Dev Team Collaborative Tool In a Country</h5>
        </div>
<div className="max-h-2xl max-w-2xl block w-1/2 bg-slate-600"><img className="w-1/3 bg-slate-800 max-h-2xl max-w-xl absolute top-5  xsm:hidden 2xl:top-0 rounded-3xl right-5" src="/web.jpg" alt="" /> 
</div>
      </div>
    <div className="relative w-full">
      <div className="text-5xl m-10 text-center font-bold text-blue-900 font-serif xsm:text-3xl">Sample Pages</div>
      <div className="flex  flex-wrap justify-center mt-5">
  
         <div className="mx-10 cursor-pointer"> <img src="a.jpg" alt="" />
      <button className="bg-blue-900 items-end font-sans mt-2 text-xs hover:bg-blue-800 text-white font-bold  px-2 rounded-xl xsm:text-sm">
       Live Preview
      </button>    </div>   
         <div className="mx-10 cursor-pointer"> <img src="a.jpg" alt="" />
      <button className="bg-blue-900 items-end font-sans mt-2 text-xs hover:bg-blue-800 text-white font-bold  px-2 rounded-xl xsm:text-sm">
       Live Preview
      </button>    </div>   
         <div className="mx-10 cursor-pointer"> <img src="a.jpg" alt="" />
      <button className="bg-blue-900 items-end font-sans mt-2 text-xs hover:bg-blue-800 text-white font-bold  px-2 rounded-xl xsm:text-sm">
       Live Preview
      </button>    </div>   
          </div>
</div>
    </>
    );
}
