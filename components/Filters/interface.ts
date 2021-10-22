import { ReactChild } from "react";
import { ReduxSortingProductsInterface } from "../../redux/sorting/interface";

export interface FiltersInterface {
  title: string;
  children: ReactChild|ReactChild[];
}

export interface FiltersSortingTypeInterface {
  title: string;
  type: string;
  selected: boolean;
}

export interface FiltersSortingInterface extends Array<FiltersSortingTypeInterface>{}

export interface FiltersSortingStateInterface {
  sortingTypes: FiltersSortingInterface;
  sortingTypeOnChange: (selectedType: string) => any;
}

export interface FiltersSortingPropsInterface {
  sorting: FiltersSortingInterface;
}
