import { FilterProps } from "./types";

import { Container, Title } from "./styles";

export const Filter = (props: FilterProps) => {
  const { title, isActive = false, ...rest } = props;

  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

