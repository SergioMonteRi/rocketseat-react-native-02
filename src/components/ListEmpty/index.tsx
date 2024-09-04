import React from "react";

import { ListEmptyProps } from "./types";

import { Container, Message } from "./styles";

const ListEmpty = (props: ListEmptyProps) => {
  const { message } = props;

  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default ListEmpty;
