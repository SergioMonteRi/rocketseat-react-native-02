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
import { Loading } from "@components/Loading";

export const Groups = () => {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      const groups = await groupsGetAll();

      setGroups(groups);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas");
      console.log(error);
    } finally {
      setIsLoading(false);
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          style={{ width: "100%" }}
          contentContainerStyle={{ flex: groups.length ? 0 : 1, rowGap: 12 }}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
};
