import { ReactElement } from "react";

import { BasketIconInterface } from "./interface";

const BasketIconDefaults: BasketIconInterface = {
  width: 24,
  height: 26,
  color: "white"
}

export function BasketIcon(props: BasketIconInterface): ReactElement {
  const defaults = { ...BasketIconDefaults, ...props };

  return (
    <svg
      width={`${defaults.width}`}
      height={`${defaults.height}`}
      viewBox={`0 0 ${defaults.width} ${defaults.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z"
        fill={`${defaults.color}`}
      />
      <path d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z"
        fill={`${defaults.color}`}
      />
    </svg>
  )
}

export default BasketIcon