import { useI18n } from '../../i18n/useI18n'
import ProgressBar from '../ui/ProgressBar'

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
            <div className="flex flex-col md:flex-row items-start justify-between xl:gap-32 md:gap-24 gap-12">
            <div className="flex flex-col items-center justify-start w-full max-w-md">
                    <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest mb-6">UI/UX</h4>
                    <div className="space-y-4 w-full">
                        <ProgressBar skill="Figma" percentage={80} />
                        <ProgressBar skill="Figma Jam" percentage={80} />
                        <ProgressBar skill="Affinity Designer" percentage={70} />
                        <ProgressBar skill="Affinity Publisher" percentage={70} />
                        <ProgressBar skill="Affinity Photo" percentage={50} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full max-w-md">
                    <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest mb-6">Frontend</h4>
                    <div className="space-y-4 w-full">
                        <ProgressBar skill="React" percentage={70} />
                        <ProgressBar skill="TypeScript" percentage={70} />
                        <ProgressBar skill="JavaScript" percentage={70} />
                        <ProgressBar skill="Tailwind CSS" percentage={85} />
                        <ProgressBar skill="Next.js" percentage={65} />
                        <ProgressBar skill="Vite" percentage={70} />
                    </div>
                </div>

               

            </div>

        </section>
    )
}

export default Skills
