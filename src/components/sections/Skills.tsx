import { useI18n } from '../../i18n/useI18n'

const Skills = () => {
    const { t } = useI18n()
  return (
    <section
    id="skills"
    className="flex xl:flex-row flex-col xl:gap-64 gap-12 scroll-mt-24 md:scroll-mt-44 xl:scroll-mt-72 my-24 flex items-center justify-start md:mx-12"
>


    <div>
        <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("skills.title")}</h4>
    </div>
    <div className="flex flex-row items-center justify-between xl:gap-64 gap-6">

      
            <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                <a href="https://www.linkedin.com/in/quentin-mercier-77835b297/" target="_blank">

                <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest">Linkedin</h4>
                <img src="/img/linkedinWhite.svg" alt="linkedin" className="md:w-35 md:h-35 w-20 h-20 mt-5 hover:scale-105 transition-transform duration-200" />
                </a>
            </div>

            <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                <a href="https://github.com/QuentinMer" target="_blank">

                <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">Github</h4>
                <img src="/img/githubWhite.svg" alt="mail" className="md:w-35 md:h-35 w-20 h-20 hover:scale-105 transition-transform duration-200" />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                <a href="mailto:quentinmer@quentinmercier.dev" target="_blank">

                <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest pb-1">Mail</h4>
                <img src="/img/mailWhite.svg" alt="mail" className="md:w-35 md:h-35 w-20 h-20 hover:scale-105 transition-transform duration-200" />
                </a>
            </div>


    </div>

</section>
  )
}

export default Skills
