import { BackButton, BackIcon, Container, Logo } from "./styles";
import logo from '../../assets/Logo.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}


export const Header = ({showBackButton = false}: Props) => {
    const navigation = useNavigation()

    function handleNavigation(){
        navigation.navigate('groups')
    }
    return (
        <Container>
            { showBackButton &&
            <BackButton onPress = {handleNavigation}>
            <BackIcon />
            </BackButton>
}
            <Logo source = {logo} alt = "logo" />
        </Container>
    )
}