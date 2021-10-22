import { ReduxSortingTypeEnum, ReduxSortingInterface } from "./interface";

export const changeSortingOptions = (selected: string): ReduxSortingInterface => ({
  type: ReduxSortingTypeEnum.CHANGE_SORTING_OPTIONS,
  payload: { selected }
});
