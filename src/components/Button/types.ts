import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProps;
};

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

export type StyledButtonProps = {
  type: ButtonTypeStylesProps;
};
