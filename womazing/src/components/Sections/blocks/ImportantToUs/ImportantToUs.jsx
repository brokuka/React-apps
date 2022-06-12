import React from "react";
import Container from "../../../Container/Container";
import Cards from "../../../Cards/Cards";
import CardItem from "../../../Cards/CardItem";
import Icon from "../../../Icon/Icon";

/* Style */
import styles from "./ImportantToUs.module.scss";

const cardGroup = [
  {
    icon: <Icon name="card-quality" href="card-quality" />,
    title: "Качество",
    text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
  },
  {
    icon: <Icon name="card-speed" href="card-speed" />,
    title: "Скорость",
    text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
  },
  {
    icon: <Icon name="card-responsibility" href="card-responsibility" />,
    title: "Ответственность",
    text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
  },
];

const ImportantToUs = ({ root, title }) => {
  return (
    <section className={root} id="important_to_us">
      <Container>
        <h2 className={title}>Что для нас важно</h2>
        <Cards>
          {cardGroup.map((card, index) => (
            <CardItem key={index}>
              <div className={styles.icon}>{card.icon}</div>
              <div className={styles.title}>{card.title}</div>
              <div className={styles.text}>{card.text}</div>
            </CardItem>
          ))}
        </Cards>
      </Container>
    </section>
  );
};

export default ImportantToUs;
