interface PortfolioProjectProps {
  title?: string;
  figmaUrl: string;
  buttonText?: string;
}

export default function PortfolioProject({ 
  title = "Projet UX/UI", 
  figmaUrl, 
  buttonText = "Voir le prototype sur Figma" 
}: PortfolioProjectProps) {
    return (
      <section className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center font-family-geist">
        {title && (
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-slate-50">{title}</h2>
        )}
        
        {/* Aperçu Figma intégré */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-4 ">
          <iframe
            className="w-full h-[500px] cursor-pointer border border-orange-500 border-collapse rounded-xl"
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`}
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Bouton lien direct */}
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-orange-500 text-center text-white font-medium rounded-xl shadow hover:bg-orange-700 transition"
        >
          {buttonText}
        </a>
      </section>
    );
  }