
import { FlatList } from 'react-native';
import { GroupCard } from '../../components/group-card/GroupCard';
import { Header } from '../../components/header/Header';
import { Highlight } from '../../components/heigh-light/HeighLight';
import { Container } from './styles';
import { useState } from 'react';
import { ListEmpty } from '../../components/list-input/ListEmpty';
import { Button } from '../../components/button/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Atef'])
  return (
    <Container>
      <Header />
      <Highlight 
      title = "atef"
      subTitle='welcome'
      />

    <FlatList
    contentContainerStyle = {groups.length === 0 && {flex : 1}}
    data = {groups}
    keyExtractor = {item => item}
    renderItem = {({item}: {item: string}) => <GroupCard title = {item} />}
    ListEmptyComponent={() => <ListEmpty message = 'Que tal cadastrar a primeira a turma' />}
    />
    <Button
     title = "Criar nova turma"
     type = "SECONDARY"
    />
    </Container>
  );
}

