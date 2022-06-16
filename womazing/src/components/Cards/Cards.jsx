import React from "react";
import Icon from "../Icon/Icon";
import CardItem from "./CardItem";
import { PropTypes } from "prop-types";
import cn from "classnames";

/* Style */
import styles from "./Card.module.scss";

const Cards = ({ collection, children, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      {collection ? (
        collection.map((item, index) => (
          <CardItem link href={`/shop/${item.category}/${item.id}`} key={index}>
            <div className={styles.header}>
              <picture>
                <source srcSet={`${item.img.src}.webp`} type="image/webp" />
                <img
                  className="img"
                  src={`${item.img.src}.jpg`}
                  alt={item.img.alt}
                  width={350}
                  height={478}
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
