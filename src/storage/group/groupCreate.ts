import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";

import { GROUP_COLLECTION } from "../storageConfig";

export const groupCreate = async (group: string) => {
  try {
    const storageGroups = await groupsGetAll();
    const storageData= JSON.stringify([...storageGroups, group])

    await AsyncStorage.setItem(GROUP_COLLECTION, storageData);
  } catch (error) {
    throw error;
  }
};
