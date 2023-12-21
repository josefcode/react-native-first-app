import { useNavigation } from "@react-navigation/native"
import { Button } from "../../components/button/Button"
import { Header } from "../../components/header/Header"
import { Highlight } from "../../components/heigh-light/HeighLight"
import { Input } from "../../components/input/Input"
import { Container, Content, Icon } from "./styles"
import { useState } from "react"
import { groupCreate } from "../../storage/group/groupCreate"
import { AppError } from "../../utils/AppError"
import { Alert } from "react-native"

export function NewGroup(){
    const navigation = useNavigation()
    const [newGroup, setNewGroup] = useState('')

    async function handleNavigateNewGroup(){
     
        try{
            if(newGroup.trim().length === 0) {
                return  Alert.alert('Novo Grupo', 'Enform o nome da turma')
            }

            await groupCreate(newGroup);
            navigation.navigate('players', {group: newGroup})
           }catch(error){
            if(error instanceof AppError){
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Nao foi possivel criar um novo grupo')
                console.log(error)
            }
           }
    }
    return (
        <Container>
            <Header showBackButton = {true} />

            <Content>
               <Icon />
               <Highlight
                title = "Nova turma"
                subTitle="crie a turma para adicionar as pessoas"
               />
               <Input 
               placeholder="Nome da turma"
               onChangeText={setNewGroup}
               />
               <Button title = "Criar"
                onPress = {handleNavigateNewGroup}
               />
            </Content>
        </Container>
    )
}