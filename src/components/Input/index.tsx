import { InputProps } from "./types";

import { Container } from "./styles";

export const Input = (props: InputProps) => {
  const { inputRef, ...rest } = props;

  return <Container ref={inputRef} {...rest} />;
};
