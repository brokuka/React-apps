import React from "react";
import Container from "../../../Container/Container";
import Row from "../../../Row/Row";
import Col from "../../../Col/Col";
import { Link } from "react-router-dom";
import Slider from "../../../Slider/Slider";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  DreamTeam1_jpg,
  DreamTeam2_jpg,
  DreamTeam3_jpg,
  DreamTeam1_webp,
  DreamTeam2_webp,
  DreamTeam3_webp,
} from "../../../Slider/imgPath";
import Button from "../../../Button/Button";
import Icon from "../../../Icon/Icon";

/* Style */
import styles from "./DreamTeam.module.scss";
import "swiper/css";

const slideGroup = [
  {
    format: {
      jpg: {
        src: DreamTeam1_jpg,
      },
      webp: {
        type: "image/webp",
        src: DreamTeam1_webp,
      },
    },
    width: 729,
    height: 488,
    alt: "Dream team",
  },
  {
    format: {
      jpg: {
        src: DreamTeam2_jpg,
      },
      webp: {
        type: "image/webp",
        src: DreamTeam2_webp,
      },
    },
    width: 729,
    height: 488,
    alt: "Dream team",
  },
  {
    format: {
      jpg: {
        src: DreamTeam3_jpg,
      },
      webp: {
        type: "image/webp",
        src: DreamTeam3_webp,
      },
    },
    width: 729,
    height: 488,
    alt: "Dream team",
  },
];

const DreamTeam = ({ root, title }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <section className={root}>
      <Container>
        <h2 className={title}>Команда мечты Womazing</h2>

        <Row className={styles.content} wrap>
          <Col def={8} sd={12}>
            <div className={styles.slider}>
              <Slider
                modules={[Navigation, Pagination, A11y]}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  //   bulletClass: "dream_team_bullet",
                  bulletClass: styles.pagination_bull,
                  bulletActiveClass: styles.pagination_bull_active,
                }}
                slidesPerView={1}
              >
                {slideGroup.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <picture>
                      <source
                        srcSet={slide.format.webp.src}
                        type={slide.format.webp.type}
                      />
                      <img
                        className="img"
                        src={slide.format.jpg.src}
                        alt={slide.alt}
                        width={slide.width}
                        height={slide.height}
                      />
                    </picture>
                  </SwiperSlide>
                ))}
                <div className={styles.pagination} ref={paginationRef}></div>
              </Slider>
              <Button
                className={styles.button_prev}
                type="slidePrev"
                innerRef={navigationPrevRef}
              >
                <Icon name="slider-arrow" href="slider-arrow" rotate />
              </Button>

              <Button
                className={styles.button_next}
                type="sliderNext"
                innerRef={navigationNextRef}
              >
                <Icon name="slider-arrow" href="slider-arrow" />
              </Button>
            </div>
          </Col>

          <Col def={3} sd={12}>
            <div className={styles.text}>
              <h3 className={styles.title}>Для каждой</h3>

              <div className={styles.text_group}>
                <p className={styles.paragraph}>
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>

                <p className={styles.paragraph}>
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые
                  выгодно подчеркивают достоинства каждой девушки.
                </p>
              </div>

              <Link className={styles.link} to="/about">
                Подробнее о бренде
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DreamTeam;
