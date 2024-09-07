import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playesGetByGroup";

import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";

import { RouteParams } from "./types";

import { Form, Container, HeaderList, NumberOfPlayers } from "./styles";

export const Players = () => {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const [team, setTeam] = useState("Time A");
  const [newPlayer, setNewPlayer] = useState("");
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayer = async () => {
    try {
      if (!newPlayer.trim()) {
        throw new AppError("Nome do jogador não pode ser vazio");
      }

      const player: PlayerStorageDTO = {
        name: newPlayer,
        team,
      };

      await playerAddByGroup(player, group);
      const players = await playersGetByGroup(group); 

      Alert.alert("Adicionar jogador", "Jogador adicionado com sucesso");2

      setNewPlayer("");
      console.log(players);

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Adicionar jogador", error.message);
        return;
      } else {
        Alert.alert("Adicionar jogador", "Não foi possível adicionar o jogador");
        console.log(error);
      }
    }
  };

  console.log(newPlayer);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          value={newPlayer}
          onChangeText={setNewPlayer}
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum jogador adicionado" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
};
