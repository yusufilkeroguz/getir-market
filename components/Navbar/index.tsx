import { ReactElement } from "react";
import Logo from "../Logo";
import NavbarBasket from "../Basket/NavbarBasket";

import styles from "./style.module.scss";

export function Navbar(): ReactElement {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Logo />

        <NavbarBasket />
      </div>
    </div>
  )
}

export default Navbar;