import axios from "axios";
import { ProductData, CartItem } from "./interface";

export interface CategoryResponse {
  items: ProductData[];
}

const URL = import.meta.env.VITE_URL;

export async function getCategory(category: string): Promise<ProductData[]> {
  try {
    const url = `${URL}/api/category?category=${category}`;
    const response = await axios.get<CategoryResponse>(url);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error;
  }
}

export async function getItem(item: string): Promise<ProductData[]> {
  try {
    const url = `${URL}/api/item?item=${item}`;
    const response = await axios.get<ProductData[]>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
}

export async function makePurchase(items: CartItem[]): Promise<boolean> {
  try {
    const url = `${URL}/api/purchase`;
    const response = await axios.post<boolean>(url, { items });
    return response.data;
  } catch (error) {
    console.error("Error making purchase:", error);
    throw error;
  }
}
