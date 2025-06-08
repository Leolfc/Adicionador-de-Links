import { Stack } from "expo-router"; //*usado para criar uma pilha de telas
import { colors } from "@/styles/colors";
export default function Layout(){
    const backgroundColor = colors.gray[950]; //*definindo a cor de fundo da tela
    return(
       <Stack screenOptions={{headerShown: false, contentStyle:{backgroundColor}
    }}/>
    )
}