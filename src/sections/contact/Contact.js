import { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MainTitle } from "../../components/modules";
import "./contact.css";

function Contact({ props }, ref) {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t4ql6ew",
        "template_jyntnh5",
        formRef.current,
        "JzdVhebB9p6KrF-TK"
      )
      .then(
        (result) => {
          setDone(true);
          nameRef.current.value = "";
          emailRef.current.value = "";
          msgRef.current.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section ref={ref} className="contact" id="contact">
<<<<<<< HEAD
      <MainTitle title="Me Contacter" />
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="full-name">Nom Complet</label>
=======
      <MainTitle title="Contact Me" />
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="full-name">Full Name</label>
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
        <input
          ref={nameRef}
          type="text"
          name="user_name"
          id="full-name"
          autoComplete="off"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          name="user_email"
          id="email"
          autoComplete="off"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          ref={msgRef}
          name="message"
          id="message"
          autoComplete="off"
          required
        ></textarea>

<<<<<<< HEAD
        <button type="submit">Envoyer</button>
=======
        <button type="submit">Send</button>
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
      </form>
      <div className={done ? "done active" : "done"}>
        <span className="close" onClick={() => setDone(false)}>
          X
        </span>
<<<<<<< HEAD
        <p>Votre message a été envoyé.</p>
=======
        <p>Your message has been sent.</p>
>>>>>>> c0d217a3e07ab69dcd3b5f227fe7f7003aaf32d2
      </div>
    </section>
  );
}

export default forwardRef(Contact);
