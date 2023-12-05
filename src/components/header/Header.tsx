import { BackButton, BackIcon, Container, Logo } from "./styles";
import logo from '../../assets/Logo.png';

type Props = {
    showBackButton?: boolean;
}


export const Header = ({showBackButton = false}: Props) => {
    return (
        <Container>
            { showBackButton &&
            <BackButton>
            <BackIcon />
            </BackButton>
}
            <Logo source = {logo} alt = "logo" />
        </Container>
    )
}