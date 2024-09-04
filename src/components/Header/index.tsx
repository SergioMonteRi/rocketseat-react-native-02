import React from "react";

import { BackButton, BackIcon, Container, Logo } from "./styles";

import { logoImg } from "@constants/images";

import { HeaderProps } from "./types";

export const Header = (props: HeaderProps) => {
  const { showBackButton = false } = props;

  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};
