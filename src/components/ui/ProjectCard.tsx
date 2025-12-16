type ProjectCardProps = {
    imageSrc?: string
    imageAlt?: string
    eyebrow: string
    title: string
    description: string
    tags?: string[]
    children?: React.ReactNode
  }
  
  const ProjectCard = ({
    imageSrc,
    imageAlt = '',
    eyebrow,
    title,
    description,
    tags = [],
    children,
  }: ProjectCardProps) => {
    return (
      <article className="w-full max-w-sm rounded-xl bg-bg-primary shadow-sm overflow-hidden flex flex-col">
        
        {/* Image */}
        {imageSrc && (
          <div className="aspect-[4/3] bg-neutral-200">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        )}
  
        {/* Content */}
        <div className="flex flex-col gap-4 p-6 flex-1">
          
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-wide text-text-secondary">
            {eyebrow}
          </span>
  
          {/* Title */}
          <h3 className="text-2xl font-abril">
            {title}
          </h3>
  
          {/* Description */}
          <p className="text-sm text-text-secondary">
            {description}
          </p>
  
          {/* Tags */}
          {tags.length > 0 && (
            <ul className="flex flex-wrap gap-3 text-sm text-accent">
              {tags.map((tag, i) => (
                <li key={i}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
  
          {/* CTA (ButtonCta injecté) */}
          <div className="mt-auto w-full">
            {children}
          </div>
        </div>
      </article>
    )
  }
  
  export default ProjectCard