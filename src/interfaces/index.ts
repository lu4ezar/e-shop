export interface Product {
  title: string;
  subtitle: string;
  isbn13?: string;
  price: string;
  image: string;
  url: string;
}

export interface ProductCardProps extends Product {
  onClick: () => void;
}

export type Catalog = Array<Product>;
