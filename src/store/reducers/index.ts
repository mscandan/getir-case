import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { basketReducer } from './basket';
import { brandsReducer } from './brands';
import { companiesReducer } from './companies';
import { paginationReducer } from './pagination';
import { productsReducer } from './products';
import { sidebarReducer } from './sidebar';
import { sortingReducer } from './sorting';
import { tagsReducer } from './tags';

const persistConfig = {
  key: 'marketAppStorage',
  storage,
  whitelist: ['basket', 'tags', 'sorting', 'brands', 'pagination', 'products'],
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  products: productsReducer,
  pagination: paginationReducer,
  basket: basketReducer,
  brands: brandsReducer,
  companies: companiesReducer,
  tags: tagsReducer,
  sorting: sortingReducer,
});

export default persistReducer(persistConfig, rootReducer);
