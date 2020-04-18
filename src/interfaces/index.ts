export type Title = string;
export type Subtitle = string;
export type Id = string;
export type Price = string;
export type Image = string;
export type Url = string;
export type Quantity = number;

export interface Cart {
  [id: number]: Id;
  quantity: Quantity;
}

export interface Product {
  title: Title;
  subtitle: Subtitle;
  isbn13?: Id;
  price: Price;
  image: Image;
  url?: Url;
}

export interface Cart {
  id: Id;
  quantity: Quantity;
}

export interface CartItem {
  [id: string]: number;
}

export interface CartInfo {
  id: Id;
  title: Title;
  price: Price;
  quantity: Quantity;
}

export interface ProductCardProps extends Product {
  onClick: () => void;
}

export type Catalog = Array<Product>;
