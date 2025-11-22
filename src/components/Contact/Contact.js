import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact' style={{ '--section-order': 3 }}>
      <div className='section__heading'>
        <h2 className='section__title'>Contact</h2>
        <p className='section__subtitle'>
          Have a product challenge, new feature idea, or need a UI/UX audit? I would love to help.
        </p>
      </div>
      <div className='contact__card'>
        <p className='contact__lede'>
          Tell me about the team, the users, and the outcomes you are chasing. I will reply quickly
          with next steps.
        </p>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
