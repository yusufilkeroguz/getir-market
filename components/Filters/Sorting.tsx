import { Key, ReactChild, ReactElement } from "react";
import { connect } from "react-redux";

import {
  FiltersSortingInterface,
  FiltersSortingPropsInterface,
  FiltersSortingStateInterface,
  FiltersSortingTypeInterface
} from "./interface";

import Filters from "./index";
import Radio from "../Radio";

import { changeSortingOptions } from "../../redux/sorting/action";

import styles from "./style.module.scss";

export function Sorting(props: FiltersSortingStateInterface): ReactElement {
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
            onChange={() => props.sortingTypeOnChange(sortingType.type)}
          />

          {sortingType.title}
        </label>
      )
    })
  }

  return (
    <Filters title={'Sorting'}>
      {renderSortingTypes(props.sortingTypes)}
    </Filters>
  )
}

const mapStateToProps = (state: FiltersSortingPropsInterface) => ({
  sortingTypes: state.sorting
});

const mapDispatchToProps = (dispatch: any) => ({
  sortingTypeOnChange: (selectedType: string) => dispatch(changeSortingOptions(selectedType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);