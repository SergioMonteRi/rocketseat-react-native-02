import { FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";

export const Groups = () => {
  const navigation = useNavigation();

  const [groups, setGroups] = useState([]);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        style={{ width: "100%" }}
        contentContainerStyle={{ flex: groups.length ? 0 : 1, rowGap: 12 }}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};
