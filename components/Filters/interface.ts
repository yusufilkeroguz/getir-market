import { ReactChild } from "react";

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