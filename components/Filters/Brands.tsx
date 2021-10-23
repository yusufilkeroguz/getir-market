import Filters from "./index";
import { ReactElement } from "react";

import styles from "./style.module.scss";

export function Brands(): ReactElement {
  return (
    <Filters title={'Brands'}>
      Brands
    </Filters>
  )
}

export default Brands;