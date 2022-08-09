
const Footer = () => {
  return (
<footer className="w-full h-64 flex bg-slate-600 mt-10 justify-center">
    <div className="m-5 inline-flex space-x-56 sm:space-x-20 xsm:space-x-16">
        <div className="flex flex-col cursor-pointer">
            <div className="active text-white font-bold pb-2 text-lg"><a href="/">Partnership</a></div>
            <div className="text-white pt-1"><a href="/">Websites</a></div>
            <div className="text-white pt-1"><a href="/">Social</a> Media</div>
            <div className="text-white pt-1"><a href="/">Branding</a></div>
        </div>
        <div className="flex flex-col cursor-pointer">
            <div className="active  text-white font-bold pb-2 text-lg"><a href="/">About</a></div>
            <div className="text-white pt-1"><a href="/">Our</a> Projects</div>
            <div className="text-white pt-1"><a href="/">Carrers</a></div>
        </div>
        <div className="flex flex-col cursor-pointer">
            <div className="active  text-white font-bold pb-2 text-lg"><a href="/">Support</a></div>
            <div className="text-white pt-1"><a href="/">Support</a> Request</div>
            <div className="text-white pt-1"><a href="/">Contact</a></div>
        </div>
        <div className="text-center absolute mb-0 mt-40  text-white"><a href="/">All Right Reserved &copy; Copyright 2022</a></div>

    </div>
</footer>
  )
}

export default Footer