import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 0.85;
  width: 100%;
  row-gap: 16px;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
