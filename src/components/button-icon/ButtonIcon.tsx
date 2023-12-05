import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps } from "./styles";
import { Input } from "../input/Input";

type Props = TouchableOpacityProps & {
  type ?: ButtonIconTypeStyleProps,
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({icon, type = 'primary', ...rest }: Props){
   return (
    <Container {...rest}>
      <Icon 
      name = {icon}
      type = {type}
      />
      
    </Container>
   )
}