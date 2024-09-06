import { Container, Subtitle, Title } from "./styles";
import { HighlightProps } from "./types";

export const Highlight = (props: HighlightProps) => {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
