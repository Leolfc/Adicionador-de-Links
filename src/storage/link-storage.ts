import AsyncStorage, { AsyncStorageStatic } from './../../node_modules/@react-native-async-storage/async-storage';


const LINKS_STORAGE_KEY = "links-storage";

export type LinkStorage = {
  id: string;
  name: string,
  url: string,
  category: string,
};

async function get() {
const storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
const response = storage ? JSON.parse(storage) : [];

return response
}
async function save(newLink: LinkStorage) {
  try {
  
const storage =await get()
  const update = JSON.stringify([...storage, newLink])
await AsyncStorage.setItem(LINKS_STORAGE_KEY, update)

  } catch (error) {
    throw error;
  }
}

export const linkStorage = {get, save}
