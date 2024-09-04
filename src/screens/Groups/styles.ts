import styled from "styled-components/native";

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 0 24px;
`;


