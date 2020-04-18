export type ProductName = string;
export type Id = number;
export type Price = number;
export type Image = string;
export type Quantity = number;

type CategoryName =
  | "category1"
  | "category2"
  | "category3"
  | "category4"
  | "category5"
  | "category6";

export interface Product {
  id: Id;
  name: ProductName;
  price: Price;
  image: Image;
  category: CategoryName;
}

export interface Category {
  name: CategoryName;
  image: Image;
  subcategories?: Category[];
}

export interface Catalog {
  products: Product[];
  categories: Category[];
}

export interface Cart {
  [id: number]: Id;
  quantity: Quantity;
}

export interface CartItem extends Cart {}

export interface CartPrice {
  [id: number]: Id;
  price: Price;
}

export interface CartInfo {
  id: Id;
  name: ProductName;
  price: Price;
  quantity: Quantity;
}

export type FormReducer = Partial<{
  field: string;
  value: string;
  type: string;
}>;

export interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  time: string;
  showMessage: "show" | "hide";
}

export interface ProductCardProps extends Product {
  onClick: () => void;
}
