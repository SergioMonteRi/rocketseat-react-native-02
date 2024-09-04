import { Container, Subtitle, Title } from "./styles";
import { HighlightProps } from "./types";

const Highlight = (props: HighlightProps) => {
  const { title, subtitle } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default Highlight;
