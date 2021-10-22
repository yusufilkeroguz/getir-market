export enum ReduxSortingTypeEnum {
  CHANGE_SORTING_OPTIONS = "CHANGE_SORTING_OPTIONS",
  GET_SORTING_OPTIONS = "GET_SORTING_OPTIONS",
}

export enum ReduxSortingOptionsTypeEnum {
  LOW_TO_HIGH = "LOW_TO_HIGH",
  HIGH_TO_LOW = "HIGH_TO_LOW",
  NEW_TO_OLD = "NEW_TO_OLD",
  OLD_TO_NEW = "OLD_TO_NEW",
}

export declare interface ReduxSortingInterface {
  type: ReduxSortingTypeEnum;
  payload: any;
}

export interface ReduxSortingProductsInterface {
  tags: Array<any>;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

export interface ReduxSortingStateInterface {
  products: Array<ReduxSortingProductsInterface>,
  loading: boolean;
  error: boolean;
}
