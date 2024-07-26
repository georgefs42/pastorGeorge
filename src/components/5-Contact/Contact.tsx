import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react'
import doneAnimation from '../../../public/animations/email_sent.json'
import emilAnimation from '../../../public/animations/email.json'
import React from 'react';

function Contact() {

  const [state, handleSubmit] = useForm("xgvwvdvy");

  return (
    <section id='contact' className='contact-me'>
      <h1 className='title'>
        <span className='icon-envelope '></span>
        Contact Me
      </h1>
      <p className='subtitle'>Låt oss ta kontakt, samarbeta och förstärka vår kreativitet tillsammans!</p>

      <div style={{ justifyContent: 'space-between' }} className='flex'>
        <form onSubmit={handleSubmit} className="border">
          <div>
            <label htmlFor="email">E-Post:</label>
            <input required type="email" name="email" id="email" />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

          </div>

          <div className='flex' style={{ marginTop: "24px" }}>
            <label htmlFor="message">Meddelande:</label>
            <textarea required name="message" id="message"></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

          </div>

          <button type="submit" disabled={state.submitting} className='submit' >
            {state.submitting ? 'Submitting ...' : 'Skicka'}
          </button>

          {state.succeeded && (
            <p className='flex' style={{ fontSize: '18px', marginTop: '1.7rem' }}>

              <Lottie
                loop={false}
                style={{ height: 70 }}
                animationData={doneAnimation} />

              <div>
                <p>Tack för ditt meddelande.</p>
                <p>Jag kommer att återkomma till dig så snart som möjligt. Med vänlig hälsning/ George.</p>
              </div>
            </p>
          )}

        </form>
        <div className="animation">
          <Lottie className='email-animation'
            style={{ height: 360 }}
            animationData={emilAnimation} />
        </div>
      </div>

    </section>
  )
}

export default Contact