import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";

import { AppError } from "@utils/AppError";

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";
import { ListEmpty } from "@components/ListEmpty";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";

import { RouteParams } from "./types";

import { Form, Container, HeaderList, NumberOfPlayers } from "./styles";

export const Players = () => {
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  const newPlayerInputRef = useRef<TextInput>(null);

  const [team, setTeam] = useState("Time A");
  const [newPlayer, setNewPlayer] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      fecthPlayersByTeam();

      newPlayerInputRef.current?.blur();
      Keyboard.dismiss();

      setNewPlayer("");
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Adicionar jogador", error.message);
        return;
      } else {
        Alert.alert(
          "Adicionar jogador",
          "Não foi possível adicionar o jogador"
        );
        console.log(error);
      }
    }
  };

  const fecthPlayersByTeam = async () => {
    try {
      setIsLoading(true);

      const playersByTeam = await playersGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam ?? []);
    } catch (error) {
      Alert.alert("Buscar jogadores", "Não foi possível buscar os jogadores");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemovePlayer = async (player: PlayerStorageDTO) => {
    try {
      await playerRemoveByGroup(player, group);
      fecthPlayersByTeam();

      Alert.alert("Remover jogador", "Jogador removido com sucesso");
    } catch (error) {
      Alert.alert("Remover jogador", "Não foi possível remover o jogador");
      console.log(error);
    }
  };

  const handleGroupRemoveConfirm = async () => {
    try {
      await groupRemoveByName(group);
      Alert.alert("Remover turma", "Turma removida com sucesso");
      navigation.navigate("groups");
    } catch (error) {
      Alert.alert("Remover turma", "Não foi possível remover a turma");
      console.log(error);
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert("Remover turma", "Deseja realmente remover a turma?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: handleGroupRemoveConfirm,
      },
    ]);
  };

  useEffect(() => {
    fecthPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerInputRef}
          placeholder="Nome da pessoa"
          value={newPlayer}
          onChangeText={setNewPlayer}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handleRemovePlayer(item)}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhum jogador adicionado" />
          )}
          style={{ width: "100%" }}
          contentContainerStyle={[
            { paddingBottom: 100, rowGap: 12 },
            players.length === 0 && { flex: 1 },
          ]}
          showsVerticalScrollIndicator={false}
        />
      )}

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={() => handleGroupRemove()}
      />
    </Container>
  );
};
