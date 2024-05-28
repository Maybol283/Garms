export interface ProductData {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviewCount: number;
  description: string;
  details?: string[];
  images: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    primary?: boolean;
  }[];
  sizes?: { name: string; inStock: boolean }[];
  colors?: { name: string; sample: string; inStock: boolean }[];
  style?: { name: string; inStock: boolean }[];
}

export interface CategoryData {
  id: number;
  category: string;
  items: ProductData[];
  filters: {
    name: string;
    id: string;
    options: { value: string; label: string; inStock: boolean }[];
  }[];
}
