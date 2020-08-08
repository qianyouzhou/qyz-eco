import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)

export const selectIsCollectionFail = createSelector(
  [selectShop],
  shop => shop.errorMessage
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>
      collections ? Object.keys(collections).map(key => collections[key]) : []
);
  
export const selectCollection = collectionUrlParam => createSelector(
      [selectCollections],
      collections => (collections ? collections[collectionUrlParam] : null)
);

