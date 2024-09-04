import { useState } from "react";
import { FlatList } from "react-native";

import Input from "@components/Input";
import Button from "@components/Button";
import Filter from "@components/Filter";
import { Header } from "@components/Header";
import ListEmpty from "@components/ListEmpty";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import PlayerCard from "@components/PlayerCard";

import {
  ContentContainer,
  Form,
  HeaderList,
  NumberOfPlayers,
  SafeAreaContainer,
} from "./styles";

export const Players = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <SafeAreaContainer>
      <ContentContainer>
        <Header showBackButton />

        <Highlight
          title="Nome da turma"
          subtitle="adicione a galera e separe os times"
        />

        <Form>
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" />
        </Form>

        <HeaderList>
          <FlatList
            data={["Time A", "Time B", "Time C"]}
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
      </ContentContainer>
    </SafeAreaContainer>
  );
};
