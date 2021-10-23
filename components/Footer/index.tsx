import { ReactElement } from "react";

import styles from "./style.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-item"]}>
        ©2019 Market
      </div>
      <div className={styles["footer-item"]}>
        Privacy Policy
      </div>
      
    </div>
  )
}

export default Footer;