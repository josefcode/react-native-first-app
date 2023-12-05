import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'
import { ThemeType } from '../../theme/theme';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 20px;
`

export const Logo = styled.Image`
    width:46px;
    height: 56px;
`

export const BackButton = styled.TouchableOpacity`
flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({theme} : {theme: ThemeType}) => ({
    size: 32,
    color: theme.COLORS.WHITE
}))`
    width:46px;
    height: 56px;
`