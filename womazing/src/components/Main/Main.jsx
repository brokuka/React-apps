import React from "react";
import cn from "classnames";
import { PropTypes } from "prop-types";
import Container from "../Container/Container";

/* Style */
import styles from "./Main.module.scss";

const Main = ({ children, block, root, header }) => {
  const headerBlock = React.Children.toArray(children)[0];

  return (
    <main
      className={cn({
        [styles.root]: root,
        [styles.block]: block,
      })}
    >
      <Container>
        {header ? (
          <>
            <div className={styles.header}>{headerBlock}</div>
            {React.Children.toArray(children).filter(
              (child, index) => index > 0
            )}
          </>
        ) : (
          <>{children}</>
        )}
      </Container>
    </main>
  );
};

Main.propTypes = {
  block: PropTypes.bool,
  root: PropTypes.bool,
};

export default Main;
