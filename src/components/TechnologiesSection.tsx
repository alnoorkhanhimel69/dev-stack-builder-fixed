import type { Technology } from '../types/technology'
import { TechnologyCard } from './TechnologyCard'
import { StackSidebar } from './StackSidebar'

interface TechnologiesSectionProps {
  technologies: Technology[]
  stack: Technology[]
  onAdd: (technology: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export function TechnologiesSection({ technologies, stack, onAdd, onRemove, onRemoveAll }: TechnologiesSectionProps) {
  return (
    <section className="technologies-section" id="technologies">
      <div className="section-shell container">
        <div className="section-heading">
          <h2>Explore the <span>Technologies</span></h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                selected={stack.some((item) => item.id === technology.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
          <StackSidebar stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
        </div>
      </div>
    </section>
  )
}
