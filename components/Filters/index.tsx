import { ReactElement } from "react";

import { FiltersInterface } from "./interface";

import styles from "./style.module.scss";

export function Filters(props: FiltersInterface): ReactElement {
  return (
    <div className={styles["filters"]}>
      <div className={styles["filters-title"]}>
        {props.title}
      </div>
      <div className={styles["filters-body"]}>
        {props.children}
      </div>
    </div>
  )
}

export default Filters;