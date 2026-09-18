import type { Project } from '../project.types'
import './ProjectVisual.css'

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual--${project.visual}`}>
      {project.image ? (
        <img className="project-visual__image" src={project.image} alt={project.imageAlt ?? ''} width={project.imageWidth} height={project.imageHeight} loading="lazy" />
      ) : (
        <div className="project-visual__illustration" aria-hidden="true">
          {project.visual === 'chart' && <div className="project-visual__chart">
            {[40, 65, 90, 50, 75].map((height, index) => <span key={index} className={`project-visual__bar${index === 2 ? ' project-visual__bar--accent' : ''}`} style={{ height: `${height}%` }} />)}
          </div>}
          {project.visual === 'palette' && <div className="project-visual__panel">
            <div className="project-visual__panel-header"><span>Tokens.Palette</span><span className="project-visual__accent">v2.4</span></div>
            <div className="project-visual__swatches"><span /><span /><span /></div>
            <div className="project-visual__panel-footer">synced</div>
          </div>}
          {project.visual === 'terminal' && <div className="project-visual__panel project-visual__panel--terminal">
            <div className="project-visual__command">$ inspector --target=compiler</div>
            <div className="project-visual__terminal-row"><span>[ast-parse]</span><span>0.042ms</span></div>
            <div className="project-visual__accent">&gt; pipeline ready</div>
          </div>}
        </div>
      )}
    </div>
  )
}
