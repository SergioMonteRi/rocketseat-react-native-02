import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export const groupCreate = async (group: string) => {
  try {
    const storageGroups = await groupsGetAll();

    const groupExists = storageGroups.find((item) => item === group);

    if (groupExists) {
      throw new AppError("Já existe uma turma com esse nome");
    }

    const storageData= JSON.stringify([...storageGroups, group])

    await AsyncStorage.setItem(GROUP_COLLECTION, storageData);
  } catch (error) {
    throw error;
  }
};
