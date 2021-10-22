import { FiltersSortingInterface } from "../../components/Filters/interface";

import { ReduxSortingTypeEnum, ReduxSortingInterface, ReduxSortingOptionsTypeEnum } from "./interface";

const INITIAL_STATE: FiltersSortingInterface = [
  {
    "title": "Price low to high",
    "type": ReduxSortingOptionsTypeEnum.LOW_TO_HIGH,
    "selected": true
  },
  {
    "title": "Price high to low",
    "type": ReduxSortingOptionsTypeEnum.HIGH_TO_LOW,
    "selected": false
  },
  {
    "title": "New to old",
    "type": ReduxSortingOptionsTypeEnum.NEW_TO_OLD,
    "selected": false
  },
  {
    "title": "Old to New",
    "type": ReduxSortingOptionsTypeEnum.OLD_TO_NEW,
    "selected": false
  }
]

export default function sortingReducer(state = INITIAL_STATE, action: ReduxSortingInterface) {
  switch(action.type) {
    case ReduxSortingTypeEnum.GET_SORTING_OPTIONS:
      return {
        ...state,
      };
    case ReduxSortingTypeEnum.CHANGE_SORTING_OPTIONS:
      return state.map((item) => {
        if(item.selected) {
          item.selected = false;
        }

        if(item.type === action.payload.selected) {
          item.selected = true;
        }

        return item;
      })
    default:
      return state;
  }
}
