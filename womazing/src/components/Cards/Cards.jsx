import React from "react";
import Icon from "../Icon/Icon";
import CardItem from "./CardItem";
import { PropTypes } from "prop-types";
import cn from "classnames";

/* Style */
import styles from "./Card.module.scss";

const Cards = ({ collection, children, className }) => {
  const View = () => {};

  return (
    <div className={cn(styles.root, className)}>
      {collection ? (
        collection.map((item, index) => (
          <CardItem link href={`/${item.category}/${item.id}`} key={index}>
            <div className={styles.header}>
              <picture>
                <source srcSet={item.img.webp.src} type={item.img.webp.type} />
                <img
                  className="img"
                  src={item.img.jpg.src}
                  alt={item.img.alt}
                  width={item.img.card.width}
                  height={item.img.card.height}
                />
              </picture>
              <Icon name="card-arrow" href="card-arrow" />
            </div>
            <div className={styles.footer}>
              <h4 className={styles.title}>{item.title}</h4>
              <div className="text-group">
                {!item.prices.oldPrice ? (
                  <span className={styles.price}>{item.prices.price}</span>
                ) : (
                  <>
                    <span className={styles.old_price}>
                      {item.prices.oldPrice}
                    </span>
                    <span className={styles.price}>{item.prices.price}</span>
                  </>
                )}
              </div>
            </div>
          </CardItem>
        ))
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Cards;
