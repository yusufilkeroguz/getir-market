import { ReactElement } from "react";

import styles from "./style.module.scss";

const price = '39,97';

export function Basket(): ReactElement {
  return (
    <div className={styles.basket}>
      BASKET
    </div>
  )
}

export default Basket;