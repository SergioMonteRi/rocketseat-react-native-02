import { useNavigation } from "@react-navigation/native";

import { logoImg } from "@constants/images";

import { HeaderProps } from "./types";

import { BackButton, BackIcon, Container, Logo } from "./styles";

export const Header = (props: HeaderProps) => {
  const navigation = useNavigation();

  const { showBackButton = false } = props;

  const handleGoBack = () => {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
};
