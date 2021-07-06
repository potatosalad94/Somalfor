import React from "react";
import styles from "./Pourquoi.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import WhyItem from "./WhyItem";

const whyItem = [
  {
    id: 1,
    icon: "/images/medal.svg",
    title: "Expertise",
    text: "Plus de 10 ans d’experience dans le forage d’eau. Vous êtes entre de bonnes mains.",
  },
  {
    id: 2,
    icon: "/images/rating.svg",
    title: "Satisfaction client",
    text: "Vous satisfaire est notre priorité, c’est pourquoi nous nous efforcons de vous apporter le meilleur service possible.",
  },
  {
    id: 3,
    icon: "/images/speed.svg",
    title: "Respect des délais",
    text: "Nous vous informons du délai de traitement et faisons le nécessaire pour que ce délai soit respecté.",
  },
  {
    id: 4,
    icon: "/images/book.svg",
    title: "Professionalisme",
    text: "Nous mettons l’accent sur la formation pour que nos collaborateurs puissent évoluer tout au long de leur carrière.",
  },
  {
    id: 5,
    icon: "/images/atom.svg",
    title: "Dynamisme",
    text: "Nous sommes exigeants dans le recrutement de notre personnel en termes de formations et d’experiences.",
  },
  {
    id: 6,
    icon: "/images/mail.svg",
    title: "Prise de contact",
    text: "Nous sommes joignables par email, par téléphone et revenons vers vous sous 48h à 72h.",
  },
];

const Pourquoi = () => {
  return (
    <Container fluid className={styles.container} id="pourquoi">
      <h1>
        Pourquoi <strong>SOMALFOR</strong>
      </h1>
      <Row>
        {whyItem.slice(0, 3).map((item) => {
          return (
            <Col xs={12} md={4} key={item.id}>
              <WhyItem icon={item.icon} title={item.title} text={item.text} />
            </Col>
          );
        })}
      </Row>
      <Row>
        {whyItem.slice(-3).map((item) => {
          return (
            <Col xs={12} md={4} key={item.id}>
              <WhyItem icon={item.icon} title={item.title} text={item.text} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Pourquoi;
