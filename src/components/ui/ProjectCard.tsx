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
    <article className="w-full max-w-sm rounded-xl bg-bg-primary shadow-sm overflow-hidden flex flex-col border border-text-secondary">
      
      {/* Image */}
      {imageSrc && (
  <div className="aspect-[4/3] bg-neutral-200 overflow-hidden">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="w-full h-full object-cover object-center"
    />
  </div>
)}

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        
        <span className="text-xs uppercase tracking-wide text-text-secondary">
          {eyebrow}
        </span>

        <h3 className="text-2xl font-abril">
          {title}
        </h3>

        <p className="text-sm text-text-secondary">
          {description}
        </p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-3 text-sm text-accent">
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto w-full">
          {children}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard