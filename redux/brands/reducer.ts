import {
  FETCH_BRANDS_BEGIN,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE
} from './action';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function brandsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BRANDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case FETCH_BRANDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}