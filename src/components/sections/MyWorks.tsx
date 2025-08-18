import Stack from "../../bloc/Animations/Stack/Stack";
import { useI18n } from "../../i18n/useI18n";


const MyWorks = () => {
  const { t } = useI18n();
  const webSites = [
    { id: 1, img: "/img/horecaseek.png" },
    { id: 2, img: "/img/fdemolder.png" },
    { id: 3, img: "/img/bluebear.png" },
  ];
  const otherProjects = [
    { id: 1, img: "/img/horecaseek.png" },
    { id: 2, img: "/img/fdemolder.png" },
    { id: 3, img: "/img/bluebear.png" },
  ];
  return (

    <section
    id="works"
    className="flex xl:flex-row flex-col items-center justify-center xl:justify-between xl:mx-12 mb-12 scroll-mt-24 md:scroll-mt-44 xl:scroll-mt-40"
  >


      <div className="flex md:flex-col gap-4 md:gap-0 flex-row items-center justify-center">
      <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title1")}</h4>
      <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title2")}</h4>
      </div>
      <div className="hidden xl:block flex flex-col items-center justify-center">
        <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.webSites")}</h4>
        <Stack
          randomRotation={true}
          sensitivity={300}
          sendToBackOnClick={false}
          cardDimensions={{ width: 600, height: 400 }}
          cardsData={webSites}
        />
      </div>
      <div className="hidden xl:block my-24">
        <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.otherProjects")}</h4>
        <Stack
          randomRotation={true}
          sensitivity={300}
          sendToBackOnClick={false}
          cardDimensions={{ width: 600, height: 400 }}
          cardsData={otherProjects}
        />
      </div>
      <div className="xl:hidden my-12 flex flex-col md:flex-row gap-24 md:gap-12 justify-between items-center">
        <div>
          <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.webSites")}</h4>

          <Stack
            randomRotation={true}
            sensitivity={300}
            sendToBackOnClick={false}
            cardDimensions={{ width: 350, height: 250 }}
            cardsData={webSites}
          />
        </div>
        <div className="my-5">
          <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.otherProjects")}</h4>

          <Stack
            randomRotation={true}
            sensitivity={300}
            sendToBackOnClick={false}
            cardDimensions={{ width: 350, height: 250 }}
            cardsData={webSites}
          />
        </div>
      </div>
    </section>

  )
}

export default MyWorks
