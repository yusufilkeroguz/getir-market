import { ReactElement } from "react";
import { CheckboxInterface } from "./interface";

import styles from "./style.module.scss";

export function Checkbox(props: CheckboxInterface): ReactElement {
  const { id, value, className, checked, onChange } = props;
  return (
    <div className={styles['checkbox']}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}