
const Header = () => {
  return (
    <div className=" flex flex-col bg-black pt-24 md:pt-45">
  
    <div className="flex justify-center md:justify-start items-center pb-10 mx-6">
      <h1 className="text-slate-100 text-center md:text-left text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-family-decifer px-5 tracking-widest">Quentin Mercier</h1>
    </div>
    <div className="flex items-center border-b border-t border-orange-500 py-1 md:py-3 gap-10 ps-5">
      <p className="text-orange-500 md:text-xl font-family-geist">web designer</p>
      <p className="text-slate-100 md:text-xl font-family-geist">frontend developer</p>
      <p className="text-slate-100 md:text-xl font-family-geist">ux/ui designer</p>
    </div>
    </div>
  )
}

export default Header
