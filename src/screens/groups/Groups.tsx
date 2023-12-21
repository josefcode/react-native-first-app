
import { FlatList } from 'react-native';
import { GroupCard } from '../../components/group-card/GroupCard';
import { Header } from '../../components/header/Header';
import { Highlight } from '../../components/heigh-light/HeighLight';
import { Container } from './styles';
import { useCallback } from 'react';
import { ListEmpty } from '../../components/list-input/ListEmpty';
import { Button } from '../../components/button/Button';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupGetData } from '../../storage/group/groupGetData';
import { LoadingIndicator } from '../../components/loading/styles';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsLoading, setGroups } from '../../redux/reducers';

export function Groups() {
  const { isLoading, groups } = useAppSelector((state ) => state.profileStatus)
  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new')
  }

  const fetchGroups = async () => {
    dispatch(setIsLoading())
    try{
     const data = await groupGetData()
     dispatch(setGroups(data))
     dispatch(setIsLoading())
    }catch(error){
      console.log(error)
    }
  }

  const handleOpenGroup = (group: string) => {
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))

  return (
    <Container>
      <Header />
      <Highlight 
      title = "Turmas"
      subTitle='Jogue com sua turma'
      />
      {
        isLoading ? <LoadingIndicator /> : 
        <FlatList
        contentContainerStyle = {groups.length === 0 && {flex : 1}}
        data = {groups}
        keyExtractor = {item => item}
        renderItem = {({item}: {item: string}) => <GroupCard title = {item} onPress = {() => handleOpenGroup(item)} />}
        ListEmptyComponent={() => <ListEmpty message = 'Que tal cadastrar a primeira a turma' />}
        />
      }
    <Button
     title = "Criar nova turma"
     type = "PRIMARY"
     onPress = {handleNewGroup}
    />
    </Container>
  );
}

