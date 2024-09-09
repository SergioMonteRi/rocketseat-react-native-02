import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Content, Icon } from "./styles";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export const NewGroup = () => {
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handleNewGroup = async () => {
    try {
      if (!group.trim()) {
        throw new AppError("Informe o nome da turma");
      }

      await groupCreate(group);
      
      setGroup("");
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova turma", error.message);
        return;
      } else {
        Alert.alert("Nova turma", "Não foi possível criar a turma");
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} value={group}/>

        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  );
};
