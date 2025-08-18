import TrueFocus from "../../bloc/Animations/TrueFocus/TrueFocus"

const Header = () => {
  return (
    <section className=" flex flex-col bg-black pt-24 md:pt-45" id="header">

      <div className="flex justify-center md:justify-start items-center pb-10 mx-6">
        <h1 className="text-slate-100 text-center md:text-left text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-family-decifer px-5 tracking-widest">Quentin Mercier</h1>
      </div>
      <div className="flex items-center border-b border-t border-orange-500 py-1 px-10">
        <TrueFocus
          sentence="web designer  frontend developer  ux/ui designer"
          manualMode={false}
          blurAmount={5}
          borderColor="#FF6900"
          animationDuration={2}
          pauseBetweenAnimations={1}
          wordColors={["#FF6900", "#F8FAFC", "#F8FAFC"]}
        />
      </div>
    </section>
  )
}

export default Header
