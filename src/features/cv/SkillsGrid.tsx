import type { CSSProperties } from 'react'
import { skillGroups } from './skills.data'
import './SkillsGrid.css'

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <section className="skills-grid__group" key={group.id} aria-labelledby={`skills-${group.id}`}>
          <header className="skills-grid__header">
            <h2 className="skills-grid__title" id={`skills-${group.id}`}>{group.title}</h2>
            <p className="skills-grid__description">{group.description}</p>
          </header>
          <ul className={`skills-grid__items skills-grid__items--${group.id}`}>
            {group.items.map(({ name, icon: Icon, color, description }) => (
              <li className="skills-grid__item" key={name} style={{ '--skill-color': color } as CSSProperties}>
                <div className="skills-grid__card">
                  <Icon className="skills-grid__icon" aria-hidden="true" focusable="false" />
                  <span className="skills-grid__name">{name}</span>
                  {description && <span className="skills-grid__detail">{description}</span>}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
