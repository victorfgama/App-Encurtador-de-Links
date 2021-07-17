import React, { useState, useEffect } from 'react'
import StatusBarPage from '../../components/StausBarPage'
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import { useIsFocused } from '@react-navigation/native'
import { deleteLink, getLinksSaves } from '../../utils/StoreLinks'
import ModalLink from "../../components/ModalLink";
import { Modal, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function MyLinks() {

    const isFocused = useIsFocused()

    const [links, setLinks] = useState([])
    const [data, setData] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => { getlinks() }, [isFocused])

    const getlinks = async () => {
        const res = await getLinksSaves('link')
        setLinks(res)
        setLoading(false)
    }

    const handleItem = (item) => {
        console.log(item)
        setData(item)
        setModalVisible(true)
    }

    const handleDelete = async (id) => {
        console.log(id)
        const res = await deleteLink(links, id)
        setLinks(res)
    }

    return (
        <Container>
            <StatusBarPage backgroundColor='#132742' barStyle={'light-content'} />
            <Menu />
            <Title>Meus Links</Title>


            {loading && (
                <ContainerEmpty>
                    <ActivityIndicator color={'#fff'} size={30} />
                </ContainerEmpty>
            )}

            {!loading && links.length === 0 && (
                <ContainerEmpty>
                    <WarningText> {'Nenhum link encurtado ainda.'}</WarningText>
                    <Icon name={'google-downasaur'} size={50} color={'#fff'} />
                </ContainerEmpty>
            )}

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem {...item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={true}
            />

            <Modal visible={modalVisible} transparent animationType={'slide'} >
                <ModalLink onClose={() => setModalVisible(false)} data={data} />
            </Modal>
        </Container>
    )
}
