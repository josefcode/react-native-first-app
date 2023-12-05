import { Header } from '../../components/header/Header'
import { Highlight } from '../../components/heigh-light/HeighLight'
import { Container } from './styles'

export function Players() {
    return (
        <Container>
          <Header showBackButton />
          <Highlight 
          title = "Nome da turma"
          subTitle='adicione a galera e espare os times'
          />
        </Container>
    )
}