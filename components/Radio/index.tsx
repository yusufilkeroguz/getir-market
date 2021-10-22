import { ReactElement } from "react";
import { RadioInterface } from "./interface";

import styles from "./style.module.scss";

export function Radio(props: RadioInterface): ReactElement {
  const { name, value, className, id, checked, onChange } = props;
  return (
    <div className={styles['checkbox']}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Radio;