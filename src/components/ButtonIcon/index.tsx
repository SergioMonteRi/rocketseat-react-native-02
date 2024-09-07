import { ButtonIconProps } from "./types";

import { Container, Icon } from "./styles";

export const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, type = "PRIMARY", ...rest } = props;

  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};
