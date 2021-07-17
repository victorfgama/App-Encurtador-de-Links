
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ButtonMenu } from './styles'

export default function Menu() {

    const navigation = useNavigation()
    return (
        <ButtonMenu onPress={() =>navigation.openDrawer() }>
            <Icon name={'menu'} color={'#fff'} size={40} />
        </ButtonMenu>
    )
}
