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
      <MainTitle title="Contact Me" />
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input ref={nameRef} type="text" name="user_name" required />

        <label>Email</label>
        <input ref={emailRef} type="email" name="user_email" required />

        <label>Message</label>
        <textarea ref={msgRef} name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
      <div className={done ? "done active" : "done"}>
        <span className="close" onClick={() => setDone(false)}>
          X
        </span>
        <p>Your message has been sent.</p>
      </div>
    </section>
  );
}

export default forwardRef(Contact);
