import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' style={{ '--section-order': 1 }}>
      <div className='section__heading'>
        <h2 className='section__title'>Selected Work</h2>
        <p className='section__subtitle'>
          Interfaces and platforms engineered with clear UX, resilient systems, and measurable
          impact.
        </p>
      </div>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
