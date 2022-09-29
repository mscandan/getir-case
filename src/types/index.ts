type CommonDataType = {
  id: string;
  label: string;
};

export type RadiosDataType = CommonDataType;

export type CardSizeType = 'sm' | 'lg';

export type ButtonGroupDataType = CommonDataType;

export type MediaBreakpointType = 'mobile' | 'tablet' | 'desktop';

export type CompanyType = {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
  count: number;
};

export type ProductItemsItemType = 'mug' | 'shirt';

export type ProductItemType = {
  tags: Array<string>;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: ProductItemsItemType;
};

export type TagType = {
  name: string;
  count: number;
};

export type SortingType = {
  value: 'price' | 'date';
  type: 'asc' | 'desc';
};

export type BasketItemType = {
  name: string;
  count: number;
  price: number;
};

export type BasketStateType = {
  basketList: Array<BasketItemType>;
  totalPrice: number;
};

export type BrandStateType = {
  allBrands: Array<CompanyType>;
  brands: Array<CompanyType>;
  selectedBrands: Array<string>;
};

export type CompanyStateType = {
  allCompanies: Array<CompanyType>;
};

export type PaginationStateType = {
  selectedPageIndex: number;
};

export type ProductsStateType = {
  allProducts: Array<ProductItemType>;
  products: Array<ProductItemType>;
  isProductsLoading: boolean;
  filteredProducts: Array<ProductItemType>;
  productsCount: number;
  itemType: ProductItemsItemType;
  allBrands: Array<CompanyType>;
};

export type SidebarStateType = {
  isSidebarOpen: boolean;
};

export type TagsStateType = {
  allTags: Array<TagType>;
  tags: Array<TagType>;
  selectedTags: Array<string>;
};

export type SortingStateType = {
  sortingType: SortingType;
  selectedSortingId: string;
};

export type ReduxStateType = {
  sidebar: SidebarStateType;
  products: ProductsStateType;
  pagination: PaginationStateType;
  basket: BasketStateType;
  brands: BrandStateType;
  companies: CompanyStateType;
  tags: TagsStateType;
  sorting: SortingStateType;
};
