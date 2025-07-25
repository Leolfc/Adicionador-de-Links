import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router, Router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";
import { linkStorage } from "@/storage/link-storage";
export default function Add(){
const [category, setCategory] = useState('')
const [name, setName] = useState('')//aspas para enteder que o tipo é String
const [url, setUrl] = useState("")




async function handleAdd(){
    try{
    if(!category){
        Alert.alert("Categoria","Selecione uma categoria")
        return
    }
    if(!name.trim()){
        Alert.alert('Nome', "Informe o nome")
    }
        if(!url.trim()){
        Alert.alert('URL', "Informe a Url")
    }

    await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url, 
        category
    })

    const data = await linkStorage.get()
    console.log(data)

}catch(error){
   Alert.alert('Erro', "Não foi possivel salvar o link!")
   console.log(error)
}
console.log([name, url])
}


    return(
       <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={()=> router.back()}>
            <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
        </View>
         <Text style={styles.label}>Selecione uma categoria</Text>
         <Categories onChange={setCategory} selected={category}/>
         <View style={styles.form}>
            <Input placeholder="Nome" onChangeText={setName}/>
            <Input placeholder="URL" onChangeText={setUrl} autoCapitalize="none"/>
            <Button title="Adicionar" onPress={handleAdd}/>
         </View>
        
       </View> 
    )
}