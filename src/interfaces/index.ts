export interface Product {
  title: string;
  subtitle: string;
  isbn13?: string;
  price: string;
  image: string;
  url: string;
}

export type Catalog = Array<Product>;
