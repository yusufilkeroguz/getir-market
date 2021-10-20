import { ReactElement } from "react";

import styles from "./style.module.scss";

interface CheckboxInterface {
  id: string;
  className: string;
  value: string;
  checked?: boolean;
}

export function Checkbox(props: CheckboxInterface): ReactElement {
  const { id, value, className, checked } = props;
  return (
    <div className={styles['checkbox']}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        className={className}
        value={value}
      />
    </div>
  )
}