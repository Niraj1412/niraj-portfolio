import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about, projects } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const featuredProject = projects?.[0]

  return (
    <section className='section about' id='about' style={{ '--section-order': 0 }}>
      <div className='about__top'>
        <span className='about__eyebrow'>Product-minded engineering</span>
        {name && (
          <h1 className='about__headline'>
            Hi, I'm <span className='about__name'>{name}</span>
          </h1>
        )}
        {role && <p className='about__role'>{role}</p>}
        <p className='about__desc'>{description && description}</p>

        <div className='about__contact'>
          {resume && (
            <a href={resume}>
              <span type='button' className='btn btn--outline'>
                View resume
              </span>
            </a>
          )}

          {social && (
            <div className='about__social'>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className='about__grid'>
        <div className='about__card'>
          <p className='about__card-label'>How I build</p>
          <ul className='about__list'>
            <li>Design systems with crisp hierarchy and meaningful motion.</li>
            <li>Reliable, API-driven delivery with clean, composable code.</li>
            <li>AI-assisted experiences that make products feel faster.</li>
          </ul>
        </div>

        {featuredProject && (
          <div className='about__card about__card--highlight'>
            <p className='about__card-label'>Currently shipping</p>
            <h4 className='about__project'>{featuredProject.name}</h4>
            <p className='about__card-desc'>{featuredProject.description}</p>
            {featuredProject.stack?.length ? (
              <ul className='about__stack'>
                {featuredProject.stack.slice(0, 4).map((item) => (
                  <li key={item} className='about__stack-item'>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}

export default About
