import { useI18n } from "../../i18n/useI18n";
import PortfolioProject from "../figma/Portfolio";


const UXUIWorks = () => {
  const { t } = useI18n();


  return (

    <section
    id="works"
    className="flex xl:flex-row flex-col items-center justify-center xl:justify-between xl:mx-12 mb-12 scroll-mt-24 md:scroll-mt-44 xl:scroll-mt-40"
  >


    <div className="flex md:flex-col gap-4 md:gap-0 flex-row items-center justify-center px-10">
      <div className="flex flex-col gap-4 text-center mx-1à">

        <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title1")}</h4>
        <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title2")}</h4>
        <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title4")}</h4>
      </div>
    </div>
     <div className=" flex flex-col items-center justify-center">
     <PortfolioProject 
       title="Beer craft"
       figmaUrl="https://www.figma.com/design/BMf0bXiuYGsyD02PilfrMi/quentin?node-id=24-658&t=g1lVrhH2cFaIe6u8-1"
       buttonText="Voir le portfolio sur Figma"
     />
     </div>
     <div className=" my-24">
      <PortfolioProject 
        title="Blue bear"
        figmaUrl="https://www.figma.com/design/B3M7v0aEmI4aJo4VsTNmXf/blue-bear?node-id=0-1&t=HjwfAgTHIEbHamqB-1"
        buttonText="Voir le projet sur Figma"
      />
     </div>
   

  </section>


  )
}

export default UXUIWorks
