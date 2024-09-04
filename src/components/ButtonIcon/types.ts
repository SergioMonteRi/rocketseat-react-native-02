import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonType = "PRIMARY" | "SECONDARY";

export type ButtonIconStylesProps = {
  type: ButtonType;
}

export type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonType;
};
