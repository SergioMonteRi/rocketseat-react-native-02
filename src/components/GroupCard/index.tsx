import { View, Text } from "react-native";
import React from "react";
import { Container, Icon, Title } from "./styles";
import { GroupCardProps } from "./types";

const GroupCard = (props: GroupCardProps) => {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupCard;
