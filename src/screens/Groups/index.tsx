import { Alert, FlatList } from "react-native";
import React, { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { groupsGetAll } from "@storage/group/groupsGetAll";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container } from "./styles";

export const Groups = () => {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  }

  const fetchGroups = async () => {
    try {
      const groups = await groupsGetAll();
      setGroups(groups);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Turmas", error.message);
        return;
      } else {
        Alert.alert("Turmas", "Não foi possível carregar as turmas");
        console.log(error);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)}/>}
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
