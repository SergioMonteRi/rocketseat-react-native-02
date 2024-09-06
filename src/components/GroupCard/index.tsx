import React from "react";
import { Container, Icon, Title } from "./styles";
import { GroupCardProps } from "./types";

export const GroupCard = (props: GroupCardProps) => {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};
