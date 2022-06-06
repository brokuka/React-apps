import React from "react";
import Container from "../Container/Container";
import { Pagination } from "swiper";
import Row from "../Row/Row";
import { SwiperSlide } from "swiper/react";
import cn from "classnames";
import Col from "../Col/Col";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import { imgJpeg1, imgWebp1 } from "../Slider/imgPath";

/* Style */
import styles from "./Intro.module.scss";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

const textGroup = [
  {
    title: "Новые поступления в этом сезоне",
    subtitle:
      "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
  },
  {
    title: "Что-то новенькое. Мы заждались тебя.",
    subtitle:
      "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
  },
  {
    title: "Включай новый сезон с WOMAZING",
    subtitle:
      "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
  },
];

const imgGroup = [
  {
    format: {
      jpg: {
        src: imgJpeg1,
      },
      webp: {
        type: "image/webp",
        src: imgWebp1,
      },
    },
    width: 410,
    height: 646,
    alt: "Girl",
  },
  {
    format: {
      jpg: {
        src: imgJpeg1,
      },
      webp: {
        type: "image/webp",
        src: imgWebp1,
      },
    },
    width: 410,
    height: 646,
    alt: "Girl",
  },
  {
    format: {
      jpg: {
        src: imgJpeg1,
      },
      webp: {
        type: "image/webp",
        src: imgWebp1,
      },
    },
    width: 410,
    height: 646,
    alt: "Girl",
  },
];

const Intro = () => {
  const [controlledSwiper, setControlledSwiper] = React.useState(null);

  return (
    <div className={styles.root}>
      <Container>
        <Row className={styles.slider} wrap>
          <Col def={7} sd={12}>
            <Slider
              slidesPerView={1}
              spaceBetween={15}
              className={cn(styles.swiper, styles.slider_text)}
              grabCursor
              modules={[Pagination]}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"></span>';
                },
              }}
            >
              {textGroup.map((text, index) => (
                <SwiperSlide key={index}>
                  <h3 className={styles.title}>{text.title}</h3>
                  <h3 className={styles.subtitle}>{text.subtitle}</h3>
                </SwiperSlide>
              ))}

              <div className={styles.btn_group}>
                <Link to="/">
                  <Button type="arrow_scroll">
                    <Icon name="arrow-scroll" href="arrow-scroll" />
                  </Button>
                </Link>
                <Button fill>
                  <span>Открыть магазин</span>
                </Button>
              </div>

              <div class={styles.slider_pagination}></div>
            </Slider>
          </Col>

          <Col def={5} none="sd">
            <Slider className={cn(styles.slider_image)} grabCursor>
              {imgGroup.map((img, index) => (
                <SwiperSlide key={index}>
                  <picture>
                    <source
                      srcSet={img.format.webp.src}
                      type={img.format.webp.type}
                    />
                    <img
                      className={cn("img", styles.img)}
                      src={img.format.jpg.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                    />
                  </picture>
                </SwiperSlide>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
