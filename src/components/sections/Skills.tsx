import { BsSearch } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillPaletteFill } from "react-icons/bs";
import { BsFillRocketFill } from "react-icons/bs";

import { useI18n } from '../../i18n/useI18n'
import ApproachCard from "../ui/ProcessCard";

const Skills = () => {
    const { t } = useI18n()
    return (
        <section id="skills" className="scroll-mt-36 xl:mt-[5%] md:mt-[10%] mt-[20%]">
            <div className="xl:mx-[10%] md:mx-[5%] mx-2">
                {/* 2 columns */}
                <div className="flex flex-col lg:items-start gap-12 lg:min-h-[70vh]">
                    {/* LEFT */}
                    <div className="flex flex-col gap-8 lg:max-w-[620px]">

                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-abril uppercase leading-[0.95]">
                            {t('approach.h2')}
                        </h2>

                        <div className="space-y-1">
                            <h3 className="text-3xl font-abril text-text-secondary">{t('approach.h3')}</h3>
                            <h3 className="text-3xl font-abril text-text-secondary">{t('approach.h32')}</h3>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 lg:mx-0 mx-auto"> 
  
                        <ApproachCard
                            step={1}
                            icon={<BsSearch />}
                            titleKey="approach.title1"
                            itemKeys={[
                                "approach.analysis1",
                                "approach.analysis2",
                                "approach.analysis3",
                            ]}
                            descriptionKey="approach.p1"
                        />
                        <ApproachCard
                            step={2}
                            icon={<BsFillPencilFill />}
                            titleKey="approach.title2"
                            itemKeys={[
                                "approach.analysis4",
                                "approach.analysis5",
                                "approach.analysis6",
                            ]}
                            descriptionKey="approach.p2"
                        />
                        <ApproachCard
                            step={3}
                            icon={<BsFillPaletteFill />}
                            titleKey="approach.title3"
                            itemKeys={[
                                "approach.analysis7",
                                "approach.analysis8",
                                "approach.analysis9",
                            ]}
                            descriptionKey="approach.p3"
                        />

                        <ApproachCard
                            step={4}
                            icon={<BsFillRocketFill />}
                            titleKey="approach.title4"
                            itemKeys={[
                                "approach.analysis10",
                                "approach.analysis11",
                                "approach.analysis12",
                            ]}
                            descriptionKey="approach.p4"
                        />

                    </div>

                </div>
            </div>
        </section>

    )
}

export default Skills
