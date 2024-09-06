import { ButtonIcon } from "@components/ButtonIcon";

import { PlayerCardProps } from "./types";

import { Container, Icon, Name } from "./styles";

export const PlayerCard = (props: PlayerCardProps) => {
  const { name, onRemove } = props;

  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={() => onRemove()} />
    </Container>
  );
};

