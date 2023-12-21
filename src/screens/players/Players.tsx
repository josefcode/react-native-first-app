import { ButtonIcon } from '../../components/button-icon/ButtonIcon'
import { Filter } from '../../components/filter/Filter'
import { Header } from '../../components/header/Header'
import { Highlight } from '../../components/heigh-light/HeighLight'
import { Input } from '../../components/input/Input'
import { Container, Form, HeaderList, NumbersOfPlayers} from './styles'
import { Alert, FlatList, TextInput} from 'react-native'
import {useEffect, useRef } from 'react'
import { PlayerCard } from '../../components/player-cord/PlayerCard'
import { ListEmpty } from '../../components/list-input/ListEmpty'
import { Button } from '../../components/button/Button'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AppError } from '../../utils/AppError'
import { playerAddByGroup } from '../../storage/player/playerAddByGroup'
import { playersGetByGroupAndTeam } from '../../storage/player/playersGetByGroupAndTeam'
import { playerRemoveByGroup } from '../../storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '../../storage/group/groupRemoveByName'
import { LoadingIndicator } from '../../components/loading/styles'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsLoading, setPlayers, setNewPlayerName, setTeam } from '../../redux/reducers';

type RouteParams = {
   group: string
} 

export function Players() {
   const { isLoading, players, newPlayerName, team } = useAppSelector((state ) => state.profileStatus)
   const dispatch = useAppDispatch()
   const newPlayerNameInputRef = useRef<TextInput>(null)
   const route = useRoute()
   const navigation = useNavigation()

   const { group} = route.params as RouteParams

   const handleAddPlayer = async () => {
    
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Nova pessao', 'Informe o nome da pessoa para adicionar')
   }
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {

      await playerAddByGroup(newPlayer, group)
      newPlayerNameInputRef.current?.blur()
      dispatch(setNewPlayerName(''))
      fetchPlayersByTeam()

    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error)
        Alert.alert('Nova pessoa', 'Nao foi possivel adicionar');
      }
    }
   }

   const fetchPlayersByTeam = async ()  => {
      try {
        dispatch(setIsLoading())
        const playersByTeam = await playersGetByGroupAndTeam(group, team)

        dispatch(setPlayers(playersByTeam));
        dispatch(setIsLoading())
      } catch (error) {
        console.log(error);
        Alert.alert('pessoas', 'Nao foi possivel carregar as pessoas filtradas')
      }
   }

   const handleRemovePlayer = async (playerName: string) => {
       try {

        await playerRemoveByGroup(playerName, group)
        fetchPlayersByTeam()
        
       } catch (error) {
        console.log(error)
        Alert.alert('Remover pessoa', 'Nao foi possivel remover a pessoa')
       }
   }

   const groupRemove = async () => {
      try {
        await groupRemoveByName(group)

        navigation.navigate('groups')
      } catch (error) {
        console.log(error),
        Alert.alert('Remover pessoa', 'Nao foi possivel remover a pessoa')
      }
   }

   const handleRemoveGroup = async () => {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      { text: 'Nao', style : 'cancel',},
      { text: 'Sim', onPress: () => groupRemove()}
    ])
   }

   useEffect(() => {
       fetchPlayersByTeam()
   },[team])

    return (
        <Container>
          <Header showBackButton />
          <Highlight 
          title = {group}
          subTitle='adicione a galera e espare os times'
          />
         <Form>
          <Input 
          inputRef = {newPlayerNameInputRef}
          onChangeText = {newText => dispatch(setNewPlayerName(newText))}
          value = {newPlayerName}
          placeholder='Nome da pessoa'
          autoCorrect= {false}
          onSubmitEditing= {handleAddPlayer}
          returnKeyType = "done"
          />
          <ButtonIcon icon = "add" onPress = {handleAddPlayer} />
          </Form> 

        <HeaderList>
          <FlatList 
           data = {['team a', 'team b']}
           keyExtractor={item => item}
           renderItem={({item}) => (
            <Filter 
            title = {item}
            isActive = {item === team}
            onPress = {() => dispatch(setTeam(item))}
           />
           )}
           horizontal
          />
          <NumbersOfPlayers>
            {players.length}
          </NumbersOfPlayers>
        </HeaderList>

        {
          isLoading ? <LoadingIndicator /> : <FlatList
          data = {players}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
           <PlayerCard 
           name = {item.name}
           onRemove={() => handleRemovePlayer(item.name)}
           />
           )}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={[
             {paddingBottom: 100},
             players.length === 0 && {flex: 1}
           ]}
           ListEmptyComponent = {() => (
             <ListEmpty
               message = "Nao ha pessoas nesse time"
             />
           )}
           />
        }
        
          <Button 
          title = "remover Turma"
          type = "SECONDARY"
          onPress = { handleRemoveGroup }
          />
        </Container>
    )
}