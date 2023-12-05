import { Button } from "../../components/button/Button"
import { Header } from "../../components/header/Header"
import { Highlight } from "../../components/heigh-light/HeighLight"
import { Input } from "../../components/input/Input"
import { Container, Content, Icon } from "./styles"

export function NewGroup(){
    return (
        <Container>
            <Header showBackButton = {true} />

            <Content>
               <Icon />
               <Highlight
                title = "Nova turma"
                subTitle="crie a turma para adicionar as pessoas"
               />
               <Input />
               <Button title = "Criar"/>
            </Content>
        </Container>
    )
}