import { Categories } from "@/components/categories";
import { Link } from "@/components/links";
import { Option } from "@/components/option";
import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons"; //*importando o MaterialIcons do expo*/
import { FlatList, Image, TouchableOpacity, View, Modal, Text } from "react-native";
import { styles } from "./styles"; //*importando os estilos do arquivo styles.ts
import { router, Router } from "expo-router";
import { useState } from "react";
import { categories } from "@/utils/categories";
import { Alert } from "react-native";
import { linkStorage, LinkStorage } from "@/storage/link-storage";
import { useEffect } from "react";

export default function Index () {

const [links, setLinks]= useState<LinkStorage[]>([])

const [category, setCategory]= useState(categories[0].name)

async function getLinks(){
    try{
const response = await linkStorage.get()
setLinks(response)
    }catch(error){
        Alert.alert('Erro',"Não foi possivel listar os links!")
    }
}
useEffect(()=>{
    getLinks()
},[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={()=> router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories onChange={setCategory} selected={category}/>

      <FlatList //*FlatList é um componente que renderiza uma lista de itens de forma eficiente
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => console.log("clicou!!!")}
         
           />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={false}>
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
          <View style={styles.modalFooter}>
            <Option name="Excluir" icon="delete" variant="secondary"  />
            <Option name="Abrir" icon="language"/>
          </View>
        </View>
        </View>
      </Modal>
    </View>
  
  );
}
