import React from "react";

import { ButtonProps } from "./types";
import { Container, Title } from "./styles";

export const Button = (props: ButtonProps) => {
  const { title, type = "PRIMARY", ...rest } = props;

  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
