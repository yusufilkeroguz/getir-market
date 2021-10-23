import Filters from "./index";
import { ReactElement } from "react";

import styles from "./style.module.scss";

export function Tags(): ReactElement {
  return (
    <Filters title={'Tags'}>
      Tags
    </Filters>
  )
}

export default Tags;