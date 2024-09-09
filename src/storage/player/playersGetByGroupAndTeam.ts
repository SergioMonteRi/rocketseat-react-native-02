import { playersGetByGroup } from "./playersGetByGroup";

export const playersGetByGroupAndTeam = async (group: string, team: string) => {
  try {
    const storagePlayers = await playersGetByGroup(group);

    const players = storagePlayers.filter(
      (player) => player.team.toLowerCase() === team.toLowerCase()
    );

    return players;
  } catch (error) {
    throw error;
  }
};
