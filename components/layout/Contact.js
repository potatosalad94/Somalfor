import { Container } from "react-bootstrap";
import { useState } from "react";
import styles from "./Contact.module.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
import useInput from "../../hooks/use-input";
import PulseLoader from "react-spinners/PulseLoader";

toast.configure();

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const notify = (toastType, text) => {
    if (toastType === "success") {
      toast.success(text, { position: toast.POSITION.BOTTOM_RIGHT });
    } else {
      toast.error(text, { position: toast.POSITION.BOTTOM_RIGHT });
    }
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput((value) => value.length > 10);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid && enteredTextIsValid) {
    formIsValid = true;
  }

  const sendEmail = (e) => {
    setIsLoading(true);
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
          setIsLoading(false);
          notify("success", "Votre message a bien été envoyé");
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          notify("error", "un problème s'est produit");
        }
      );

    resetNameInput();
    resetEmailInput();
    resetTextInput();
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    sendEmail(event);
  };

  const nameInputStyle = nameInputHasError ? `${styles.invalid}` : "";
  const emailInputStyle = emailInputHasError ? `${styles.invalid}` : "";
  const textInputStyle = textInputHasError ? `${styles.invalid}` : "";

  return (
    <Container fluid className={styles.container} id="contact">
      <div className={styles.cardContainer}>
        <h1 className="text-center py-5">
          Contactez-<strong>nous</strong>
        </h1>
        <form onSubmit={formSubmissionHandler}>
          <div className={styles.formControl}>
            <input
              placeholder="Nom et prénom"
              name="fullname"
              onChange={nameChangedHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
              className={nameInputStyle}
            />
            {nameInputHasError && (
              <p className="text-danger">
                Veuillez renseigner votre nom complet
              </p>
            )}
            <input
              placeholder="Adresse email"
              name="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              className={emailInputStyle}
            />
            {emailInputHasError && (
              <p className="text-danger">Veuillez entrer un email valide</p>
            )}
            <textarea
              placeholder="Message"
              name="message"
              onChange={textChangeHandler}
              onBlur={textBlurHandler}
              value={enteredText}
              className={textInputStyle}
            />
            {textInputHasError && (
              <p className="text-danger">
                Veuillez entrer un message d&apos;au moins 10 charactères
              </p>
            )}
            <button
              disabled={!formIsValid}
              className={styles["btn-flat"]}
              type="submit"
            >
              {!isLoading ? (
                "Envoyer"
              ) : (
                <PulseLoader color="#FFFFFF" loading={isLoading} size={11} />
              )}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
