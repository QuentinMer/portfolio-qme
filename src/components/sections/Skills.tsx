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
            <div className="flex flex-row items-center justify-between xl:gap-64 gap-0">

                <div className="flex flex-col items-center justify-center my-24">
                    <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest mb-4">Frontend</h4>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-md font-family-geist text-slate-50 text-center">
                        <div>React</div>
                        <div>Javascript</div>
                        <div>Typescript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>Tailwind</div>
                        <div>Bootstrap</div>
                        <div>Material UI</div>
                        <div>Next.js</div>
                        <div>Vite</div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center my-24">
                    <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest mb-4">Design UI/UX</h4>
                    <ul className='text-md font-family-geist text-slate-50 text-center space-y-2'>
                        <li>Figma</li>
                        <li>figjam</li>
                        <li>afinity designer</li>
                        <li>affinity publisher</li>
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Skills
