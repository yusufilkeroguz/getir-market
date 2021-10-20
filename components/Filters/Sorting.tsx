import { Key, ReactChild, ReactElement } from "react";

import { FiltersSortingInterface, FiltersSortingTypeInterface } from "./interface";

import Filters from "./index";
import Radio from "../Radio";

import styles from "./style.module.scss";

const SORTING_TYPES: FiltersSortingInterface = [
  {
    "title": "Price low to high",
    "type": "LOW_TO_HIGH",
    "selected": true
  },
  {
    "title": "Price high to low",
    "type": "HIGH_TO_LOW",
    "selected": false
  },
  {
    "title": "New to old",
    "type": "NEW_TO_OLD",
    "selected": false
  },
  {
    "title": "Old to New",
    "type": "OLD_TO_NEW",
    "selected": false
  }
]

function renderSortingTypes(sortingTypes: FiltersSortingInterface): ReactChild[] {
  return sortingTypes.map((sortingType: FiltersSortingTypeInterface, key: Key) => {
    return (
      <label
        htmlFor={`sorting_${sortingType.type}`}
        className={styles['filters-sorting-type']}
        key={key}
      >
        <Radio
          name='filters_sorting'
          value={sortingType.type}
          className={styles['filters-sorting-type_checkbox']}
          checked={sortingType.selected}
        />

        {sortingType.title}
      </label>
    )
  })
}

export function Sorting(): ReactElement {
  return (
    <Filters title={'Sorting'}>
      {renderSortingTypes(SORTING_TYPES)}
    </Filters>
  )
}

export default Sorting;