
import { styles } from "./styles";
import { View,Image, TouchableOpacity } from "react-native";
import {MaterialIcons} from "@expo/vector-icons" //*importando o MaterialIcons do expo*/
import { colors } from "@/styles/colors";
import { Button } from "@react-navigation/elements";

export default function () {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image source={require('@/assets/logo.png') } style={styles.logo}/>

    <TouchableOpacity >
      <MaterialIcons name="add" size={32} color={colors.green[300]}/>
    </TouchableOpacity>

    </View>
    <TouchableOpacity><Button >Clique aqui</Button></TouchableOpacity>
    </View>
  );
}

