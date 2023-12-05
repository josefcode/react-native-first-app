import styled, {css} from "styled-components/native";
import { TouchableOpacity } from 'react-native'


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
    ${({theme}) => css`
    background-color: ${({type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    `}
   flex: 1;
   min-height: 56px;
   max-height: 56px;
   border-radius: 6px;
   justify-content: center;
   align-items: center;
   margin-top: 14px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
`