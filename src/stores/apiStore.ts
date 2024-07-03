import { writable } from 'svelte/store';
import { fetchData } from '../data/fetchData';

const API_KEY = import.meta.env.VITE_NEXON_API_KEY as string;

export const weaponData = writable([]);
export const descendantData = writable([]);
export const error = writable<Error | null>(null);

export async function loadData() {
  try {
    const weaponResponse = await fetchData('/api/static/tfd/meta/en/weapon.json', API_KEY);
    const descendantResponse = await fetchData('/api/static/tfd/meta/en/descendant.json', API_KEY);

    weaponData.set(weaponResponse);
    descendantData.set(descendantResponse);
  } catch (err: any) {
    console.error("Error response:", err.response);
    console.error("Error message:", err.message);
    error.set(err);
  }
}
