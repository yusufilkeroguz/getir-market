import { ReactElement } from "react";

import styles from "./style.module.scss";

interface RadioInterface {
  name: string;
  value: string;
  className?: string;
  id?: string;
  checked?: boolean;
}

export function Radio(props: RadioInterface): ReactElement {
  const { name, value, className, id, checked } = props;
  return (
    <div className={styles['checkbox']}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        className={className}
        value={value}
      />
    </div>
  )
}

export default Radio;