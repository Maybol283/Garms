import axios from "axios";

export interface Item {
  id: number;
  name: string;
  // other fields
}

export interface CategoryResponse {
  items: Item[];
  // other fields
}

const URL = import.meta.env.VITE_URL; // Update this to your actual URL

export async function getCategory(category: string): Promise<Item[]> {
  try {
    console.log(`${URL}/${category}`);
    const response = await axios.get<CategoryResponse>(`${URL}${category}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching category items:", error);
    throw error;
  }
}
