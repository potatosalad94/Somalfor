import { Container } from "react-bootstrap";
import styles from "./Contact.module.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cvxsq62",
        "template_1gxnpcp",
        e.target,
        "user_7uFlBdC7doHDnZJlQh28I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid className={styles.container} id="contact">
      <div className={styles.cardContainer}>
        <h1 className="text-center py-5">
          Contactez-<strong>nous</strong>
        </h1>
        <form onSubmit={sendEmail}>
          <div className={styles.appFormGroup}>
            <input placeholder="Nom et prénom" name="fullname" />
            <input placeholder="Adresse email" name="email" />
            <textarea placeholder="Message" name="message" />
            <button className={styles["btn-flat"]} type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
