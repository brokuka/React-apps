import React from "react";
import { Pagination, Controller } from "swiper";
import Row from "../Row/Row";
import { SwiperSlide } from "swiper/react";
import cn from "classnames";
import Col from "../Col/Col";
import Button from "../ui/Button/Button";
import Slider from "../ui/Slider/Slider";
import { imgJpeg1, imgWebp1 } from "../ui/Slider/imgPath";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon/Icon";
import Image from "../Image/Image";

/* Style */
import styles from "./Intro.module.scss";
import axios from "axios";
import { dataUrls } from "../../utils/constants";

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
  const paginationRef = React.useRef(null);
  const swiper1Ref = React.useRef();
  const swiper2Ref = React.useRef();

  React.useLayoutEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current;
    swiper2Ref.current.controller.control = swiper1Ref.current;
  }, []);

  return (
    <div className={styles.root}>
      <Row className={styles.slider} wrap>
        <Col def={6} sd={12}>
          <Slider
            slidesPerView={1}
            spaceBetween={15}
            className={cn(styles.swiper, styles.slider_text)}
            grabCursor
            modules={[Pagination, Controller]}
            onSwiper={(swiper) => (swiper1Ref.current = swiper)}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            pagination={{
              el: paginationRef.current,
              bulletClass: styles.bullet,
              bulletActiveClass: styles.bullet_active,
              clickable: true,
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

              <Link to="/shop">
                <Button fill height="100%">
                  <span>Открыть магазин</span>
                </Button>
              </Link>
            </div>

            <div className={styles.slider_pagination} ref={paginationRef}></div>
          </Slider>
        </Col>

        <Col def="auto" none="sd" className={styles.second}>
          <Slider
            className={styles.slider_image}
            grabCursor
            modules={[Controller]}
            onSwiper={(swiper) => (swiper2Ref.current = swiper)}
          >
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
    </div>
  );
};

export default Intro;
