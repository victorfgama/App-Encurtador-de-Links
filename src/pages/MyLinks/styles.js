import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color: #132742;
padding:15px;
`

export const Title = styled.Text`
margin-top: ${Platform.OS==='ios'? '35%' : '20%'};
font-size:33px;
font-weight:bold;
color:#fff
`

export const ListLinks = styled.FlatList`

`

export const ShortLinkArea = styled.TouchableOpacity`
height:45px;
width:100%;
background-color:#172742;
border-radius:7px;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:0 10px;

`
export const ShortLinkUrl = styled.Text`
width:90%;
color:#fff;
font-size:16px;
`

export const WarningText = styled.Text`
color:#fff;
font-size:20px;
margin-bottom:50px;
`

export const ContainerEmpty = styled.View`
margin-top: 15%;
align-items: center;
`