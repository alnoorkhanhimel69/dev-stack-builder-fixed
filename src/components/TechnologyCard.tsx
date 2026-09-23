import type { Technology } from '../types/technology'
import { StarIcon } from './Icons'

interface TechnologyCardProps {
  technology: Technology
  selected: boolean
  onAdd: (technology: Technology) => void
}

export function TechnologyCard({ technology, selected, onAdd }: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="card-topline">
        <img className="tech-icon" src={technology.icon} alt={`${technology.name} logo`} />
        <span className={`badge badge--${technology.id}`}>{technology.badge}</span>
      </div>
      <h3>{technology.name}</h3>
      <p>{technology.description}</p>
      <div className="card-meta">
        <span className="category-chip">{technology.category}</span>
        <span className="difficulty">{technology.difficulty}</span>
        <span className="rating"><StarIcon /> {technology.rating}</span>
      </div>
      <button className={`add-button ${selected ? 'added' : ''}`} disabled={selected} onClick={() => onAdd(technology)}>
        {selected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}
