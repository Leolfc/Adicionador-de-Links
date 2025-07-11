import { Categories } from "@/components/categories";
import { Link } from "@/components/links";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons"; //*importando o MaterialIcons do expo*/
import { FlatList, Image, TouchableOpacity, View, Modal, Text } from "react-native";
import { styles } from "./styles"; //*importando os estilos do arquivo styles.ts
export default function () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories />

      <FlatList //*FlatList é um componente que renderiza uma lista de itens de forma eficiente
        data={["1", "2", "3", ]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name="Rockseat"
            url="https://www.rocketseat.com.br/"
            onDetails={() => console.log("clicou!!!")}
         
           />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={true}>
        <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
        <Text style={styles.modalCategory}>Curso</Text>
       <TouchableOpacity>
        <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
       </TouchableOpacity>
        
          </View>
          <Text style={styles.modalLinkName}>Rockseat</Text>
          <Text style={styles.modalUrl}>
            https://www.rocketseat.com.br/
          </Text>
        </View>
        </View>
      </Modal>
    </View>
  
  );
}
