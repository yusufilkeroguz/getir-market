import { ReactElement } from "react";
import Logo from "../Logo";
import Basket from "../Basket";

import styles from "./style.module.scss";

export function Navbar(): ReactElement {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Logo />

        <Basket />
      </div>
    </div>
  )
}

export default Navbar;