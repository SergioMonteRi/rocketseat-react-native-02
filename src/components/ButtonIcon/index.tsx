import { ButtonIconProps } from "./types";

import { Container, Icon } from "./styles";

const ButtonIcon = (props: ButtonIconProps) => {
  const { icon, type = "PRIMARY" } = props;

  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
};

export default ButtonIcon;
