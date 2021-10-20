import { ReactElement } from "react";

import BasketIcon from "./Icon";

import styles from "./style.module.scss";

const price = '39,97';

export function NavbarBasket(): ReactElement {
  return (
    <div className={styles['navbar-basket']}>
      <BasketIcon />
      
      ₺ {price}
    </div>
  )
}

export default NavbarBasket;