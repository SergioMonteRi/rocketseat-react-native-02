import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 0.85;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
