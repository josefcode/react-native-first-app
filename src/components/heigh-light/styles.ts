import styled, {css} from "styled-components/native";
import { ThemeType } from "../../theme/theme";

export const Container = styled.View`
width: 100%;
height: 32px 0;
margin-bottom: 20px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    `}
text-align: center;
`


export const SubTitle = styled.Text`
    ${({theme}) => css`
    font-size: ${ theme.FONT_SIZE.MD}px;
    font-family: ${ theme.FONT_FAMILY.REGULAR};
    color: ${ theme.COLORS.GRAY_300};
    `}
text-align: center;
`