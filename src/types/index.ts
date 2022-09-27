export type RadiosDataType = {
  id: string;
  label: string;
};

export type CardSizeType = 'sm' | 'lg';

export type ButtonGroupDataType = {
  id: string;
  label: string;
};

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
};

export type ProductItemType = {
  tags: Array<string>;
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: 'mug' | 'shirt';
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
};
