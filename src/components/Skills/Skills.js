import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills' style={{ '--section-order': 2 }}>
      <div className='section__heading'>
        <h2 className='section__title'>Skills</h2>
        <p className='section__subtitle'>
          Tooling I reach for when shipping modern products and keeping teams moving quickly.
        </p>
      </div>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
