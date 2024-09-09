import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export const groupRemoveByName = async (groupName: string) => {
  try {
    const storagedGroups = await groupsGetAll() 

    const filteredGroups = storagedGroups.filter(
      (group) => group !== groupName
    );

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
};
