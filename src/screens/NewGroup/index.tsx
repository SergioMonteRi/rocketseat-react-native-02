import { Header } from "@components/Header";

import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

import { SafeAreaContainer, ContentContainer, Content, Icon } from "./styles";

export const NewGroup = () => {
  return (
    <SafeAreaContainer>
      <ContentContainer>
        <Header showBackButton />

        <Content>
          <Icon />

          <Highlight
            title="Nova turma"
            subtitle="crie uma turma para adicionar pessoas"
          />

          <Input placeholder="Nome da turma"/>

          <Button title="Criar" />
        </Content>
      </ContentContainer>
    </SafeAreaContainer>
  );
};

