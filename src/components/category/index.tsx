import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";

type Props = PressableProps & {
  name: String;
  isSelected: boolean
  icon: keyof typeof MaterialIcons.glyphMap;
  // 'code' | 'language' | 'movie'; // exemplo de icon
};
export function Category({ name, icon, isSelected, ...rest }: Props) {  //*desestruturando o rest, pegando propriedades restantes
const color = isSelected ? colors.green[300] : colors.gray[400]; // Definindo a cor com base na seleção

  return (
    <Pressable style={styles.container} {...rest}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
