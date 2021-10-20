import { ReactElement } from "react";

import BasketIcon from "./Icon";

import styles from "./style.module.scss";

const price = '39,97';

export function Basket(): ReactElement {
  return (
    <div className={styles.basket}>
      <BasketIcon />
      
      ₺ {price}
    </div>
  )
}

export default Basket;