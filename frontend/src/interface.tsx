import { ReactNode } from "react";

export interface ProductData {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  details?: string[];
  amountInStock: number;
  images: {
    id: number;
    imageSrc: string;
    imageAlt: string;
    primary?: boolean;
  }[];
  sizes?: { name: string; inStock: boolean }[];
  colors: { name: string; sample: string; inStock: boolean }[];
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

// Define the type for a cart item
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image: { imageSrc: string; imageAlt: string };
  color: string;
  size?: string;
}

// Define the type for the context value
export interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  removeAllFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

// Define the type for the provider props
export interface CartProviderProps {
  children: ReactNode;
}
