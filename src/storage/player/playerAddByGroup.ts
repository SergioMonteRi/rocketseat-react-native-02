import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const storagePlayers = await playersGetByGroup(group);
    
    const playerExists = storagePlayers.find(
      (player) =>
        player.name.toLowerCase() === newPlayer.name.toLocaleLowerCase()
    );

    if (playerExists) {
      throw new AppError(
        `Já existe um jogador com esse nome em ${group} - ${playerExists.team}`
      );
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
