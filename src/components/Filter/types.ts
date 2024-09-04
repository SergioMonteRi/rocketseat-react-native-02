import { TouchableOpacityProps } from "react-native";

export type FilterProps = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
};

export type FilterStylesProps = {
  isActive?: boolean;
};
