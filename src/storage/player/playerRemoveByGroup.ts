import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";

export const playerRemoveByGroup = async (
  player: PlayerStorageDTO,
  group: string
) => {
  try {
    const storageGroup = await playersGetByGroup(group);

    const filteredPlayers = storageGroup.filter(
      (item) => item.name !== player.name
    );

    const players = JSON.stringify(filteredPlayers);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
};
