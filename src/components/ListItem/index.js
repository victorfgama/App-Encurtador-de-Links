import React from 'react'
import { View, Text } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ContainerButton, Item, ActionContainer } from './styles'

export default function ListItem(props) {

    const rightActions = ()=>{
        return(
            <ActionContainer onPress={()=> props.deleteItem(props.id)}>
                <Icon name={'trash-can-outline'} color={'#fff'} size={ 24}/>
            </ActionContainer>
        )
    }
    
    return (
        <View>
        <Swipeable renderRightActions={()=>rightActions()}>
            <ContainerButton activeOpacity={0.9} onPress={()=>{props.selectedItem(props)}}>
                <Icon name='link' color='#fff' size={24} />
                <Item numberOfLines={1} >{props.long_url}</Item>
            </ContainerButton>
            </Swipeable>
        </View>
    )
}
