import type { Technology } from '../types/technology'
import { CloseIcon } from './Icons'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  return (
    <aside className="stack-panel" aria-label="Your technology stack">
      <div className="stack-heading">
        <h2>Your Stack</h2>
        <p>{stack.length ? `${stack.length} Technology Selected` : 'No technologies selected yet.'}</p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img src={technology.icon} alt="" />
                <div>
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
                <button onClick={() => onRemove(technology.id)} aria-label={`Remove ${technology.name}`}>
                  <CloseIcon />
                </button>
              </div>
            ))}
          </div>
          <button className="remove-all" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  )
}
