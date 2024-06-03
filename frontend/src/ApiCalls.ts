import axios from "axios";
import { ProductData } from "./interface";

export interface CategoryResponse {
  items: ProductData[];
}

const URL = import.meta.env.VITE_URL; // Update this to your actual URL

export async function getCategory(category: string): Promise<ProductData[]> {
  try {
    const url = `${URL}/api/category?category=${category}`;
    console.log(`${URL}/api/category?category=${category}`);
    const response = await axios.get<CategoryResponse>(url);
    console.log(response);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error;
  }
}

export async function getItem(item: string): Promise<ProductData[]> {
  try {
    const url = `${URL}/api/item?item=${item}`;
    const fixed = encodeURI(url);
    console.log(fixed);
    const response = await axios.get<ProductData[]>(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error;
  }
}
