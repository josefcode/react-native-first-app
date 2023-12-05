import { ButtonIcon } from '../../components/button-icon/ButtonIcon'
import { Filter } from '../../components/filter/Filter'
import { Header } from '../../components/header/Header'
import { Highlight } from '../../components/heigh-light/HeighLight'
import { Input } from '../../components/input/Input'
import { Container, Form, HeaderList, NumbersOfPlayers} from './styles'
import { FlatList} from 'react-native'
import {useState } from 'react'

export function Players() {
   const [team, setTeam] = useState('team a')
   const [players, setPlayers] = useState(['atef', 'lair'])
    return (
        <Container>
          <Header showBackButton />
          <Highlight 
          title = "Nome da turma"
          subTitle='adicione a galera e espare os times'
          />
         <Form>
          <Input 
          placeholder='Nome da pessoa'
          autoCorrect= {false}
          />
          <ButtonIcon icon = "add" />
          </Form> 

        <HeaderList>
          <FlatList 
           data = {['team a', 'team b']}
           keyExtractor={item => item}
           renderItem={({item}) => (
            <Filter 
            title = {item}
            isActive = {item === team}
            onPress = {() => setTeam(item)}
           />
           )}
           horizontal
          />
          <NumbersOfPlayers>
            {players.length}
          </NumbersOfPlayers>
        </HeaderList>
        
        </Container>
    )
}