import React, { useRef, useState } from 'react';
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { AiOutlinePhone } from "react-icons/ai"
import emailJs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm('service_izuz3rr', 'template_y9vz4er', form.current, '7VUBczkagOhqeeyOA')
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite lors de l'envoi du formulaire :", error);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Discutons !</h5>
      <h2>Envoyez moi un message</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jason.ikhlef@gmail.com</h5>
            <a href="mailto:jason.ikhlef@gmail.com" target="_blank" rel="noreferrer">Envoyer un email</a>
          </article>
          <article className="contact_option">
            <AiOutlinePhone className="contact_option-icon" />
            <h4>Par téléphone</h4>
            <h5>06 49 02 97 80</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name="email" placeholder="Votre adresse mail" required />
          <input type="text" name="subject" placeholder="Sujet du mail" required />
          <textarea name="message" rows="7" placeholder="Votre message" required></textarea>
        {isSuccess && <p className='success'>Le formulaire a été envoyé avec succès !</p>}
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact