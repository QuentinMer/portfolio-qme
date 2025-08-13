
const About = () => {
  return (
    <section id="about" className="py-24 md:pt-10 flex md:flex-row flex-col">
      <img src="/img/about.svg" alt="photo profil" className="w-full md:w-[65%] xl:w-[60%] hidden md:block" />
      <img src="/img/about-mobile.svg" alt="photo profil" className="w-full block md:hidden" />
      <div className="my-auto md:pb-10">

      <p className="text-start text-slate-100 xl:text-4xl text-2xl font-family-decifer tracking-widest mx-12 my-auto leading-relaxed">«The web is more a social creation than a technical one. I designed it for a social effect, to help people work together and not as a technical toy»</p>
      <p className="text-end text-slate-100 xl:text-2xl text-xl font-family-decifer tracking-widest mx-24 my-auto mt-6">— Tim Berners-Lee</p>
      </div>
    </section>
  )
}

export default About
