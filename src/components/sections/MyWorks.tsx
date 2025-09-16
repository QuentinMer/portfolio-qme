import Stack from "../../bloc/Animations/Stack/Stack";
import { useI18n } from "../../i18n/useI18n";
import Modal from "../ui/Modale";
import { useState } from "react";


const MyWorks = () => {
  const { t } = useI18n();
  const [selectedProject, setSelectedProject] = useState<{ id: number; img: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: { id: number; img: string }) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const webSites = [
    { id: 1, img: "/img/horecaseek.png" },
    { id: 2, img: "/img/fdemolder.png" },
    { id: 3, img: "/img/bluebear.png" },
  ];
  const otherProjects = [
    { id: 1, img: "/img/pokedex.png" },
    { id: 2, img: "/img/simon.png" },
    { id: 3, img: "/img/fairePart.png" },
    { id: 4, img: "/img/meteo.png" },
    { id: 5, img: "/img/movieData.png" },
    { id: 6, img: "/img/codeEditor.png" },
  ];
  return (

    <section
      id="works"
      className="flex xl:flex-row flex-col items-center justify-center xl:justify-between xl:mx-12 mb-12 scroll-mt-24 md:scroll-mt-44 xl:scroll-mt-40"
    >


      <div className="flex md:flex-col gap-4 md:gap-0 flex-row items-center justify-center px-10">
        <div className="flex flex-col gap-4 text-center mx-1à">

          <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title1")}</h4>
          <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title2")}</h4>
          <h4 className="text-6xl xl:text-8xl font-family-decifer text-orange-500">{t("work.title3")}</h4>
        </div>
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
      <div className="xl:hidden my-12 flex flex-col gap-12 justify-center items-center">
        <div className="w-full max-w-md">
          <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.webSites")}</h4>
          <div className="flex flex-col gap-4">
            {webSites.map((project) => (
              <div key={project.id} className="p-2 cursor-pointer" onClick={() => handleProjectClick(project)}>
                <img 
                  src={project.img} 
                  alt={`Projet ${project.id}`}
                  className="w-full h-32 object-cover rounded-md hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-md">
          <h4 className="text-2xl font-family-decifer text-slate-50 text-center mb-5 tracking-widest">{t("myworks.otherProjects")}</h4>
          <div className="flex flex-col gap-4">
            {otherProjects.map((project) => (
              <div key={project.id} className="p-2 cursor-pointer" onClick={() => handleProjectClick(project)}>
                <img 
                  src={project.img} 
                  alt={`Projet ${project.id}`}
                  className="w-full h-32 object-cover rounded-md hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="flex flex-col items-center">
            <img 
              src={selectedProject.img} 
              alt={`Projet ${selectedProject.id}`}
              className="w-full max-w-lg h-auto object-contain rounded-md"
            />
          </div>
        )}
      </Modal>

    </section>

  )
}

export default MyWorks
