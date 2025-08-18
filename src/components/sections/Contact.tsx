import { useI18n } from "../../i18n/useI18n";

const Contact = () => {
    const { t } = useI18n();
    return (
        <section
            id="contact"
            className="flex xl:flex-row flex-col xl:gap-64 gap-12 scroll-mt-24 md:scroll-mt-44 xl:scroll-mt-40 my-24 flex items-center justify-start mx-12"
        >


            <div>
                <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("contacts.title")}</h4>
            </div>
            <div className="flex flex-row items-center justify-between xl:gap-64 gap-6">

              
                    <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                        <a href="https://www.linkedin.com/in/quentin-mercier-77835b297/" target="_blank">

                        <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center tracking-widest">Linkedin</h4>
                        <img src="/img/linkedin.svg" alt="linkedin" className="md:w-35 md:h-35 w-20 h-20 mt-5" />
                        </a>
                    </div>
        
                    <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                        <a href="https://github.com/QuentinMer" target="_blank">

                        <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">Github</h4>
                        <img src="/img/github.svg" alt="mail" className="md:w-35 md:h-35 w-20 h-20" />
                        </a>
                    </div>
                    <div className="flex flex-col items-center justify-center my-24 cursor-pointer">
                        <a href="mailto:quentinmer@quentinmercier.dev" target="_blank">

                        <h4 className="text-xl md:text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest pb-1">Mail</h4>
                        <img src="/img/mail.png" alt="mail" className="md:w-35 md:h-35 w-20 h-20" />
                        </a>
                    </div>
        

            </div>

        </section>
    )
}

export default Contact
