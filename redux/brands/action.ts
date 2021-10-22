export declare const FETCH_BRANDS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export declare const FETCH_BRANDS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export declare const FETCH_BRANDS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchBrandsBegin = () => ({
  type: FETCH_BRANDS_BEGIN
});

export const fetchBrandsSuccess = products => ({
  type: FETCH_BRANDS_SUCCESS,
  payload: { products }
});

export const fetchBrandsFailure = error => ({
  type: FETCH_BRANDS_FAILURE,
  payload: { error }
});
