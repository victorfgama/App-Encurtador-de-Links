import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import StatusBarPage from '../../components/StausBarPage'
import Menu from '../../components/Menu'
import { ContainerContent, ContainerLogo, Logo, SubTitle, Title, ContainerInput, BoxIcon, Input, ButtonLink, ButtonLinkText } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Keyboard, KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import ModalLink from '../../components/ModalLink'
import api from '../../services/api'
import { saveLink } from '../../utils/StoreLinks'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setData] = useState({})

    async function handleShortLink(params) {
        setLoading(true)
        try {
            const res = await api.post('/shorten', { long_url: input })
            console.log(res.data)
            setData(res.data)
            setModalVisible(true)
            saveLink('link', res.data)

            Keyboard.dismiss()
            setLoading(false)
        } catch (error) {
            Keyboard.dismiss()
            setInput('')
            setLoading(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <LinearGradient colors={['#1ddbb9', '#132742']} style={{ flex: 1, justifyContent: 'center' }}>
                <StatusBarPage backgroundColor='#1ddbb9' barStyle={'dark-content'} />
                <Menu />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'padding'} enabled={true}>
                    <ContainerLogo>
                        <Logo source={require('../../assets/images/Logo.png')} resizeMode={'contain'} />
                    </ContainerLogo>
                    <ContainerContent>
                        <Title>Encurtador</Title>
                        <SubTitle>Cole seu link para encurtar</SubTitle>
                        <ContainerInput>
                            <BoxIcon>
                                <Icon name={'link'} size={22} color={'#fff'} />
                            </BoxIcon>
                            <Input
                                value={input}
                                onChangeText={(value) => setInput(value)}
                                placeholder="Cole seu link aqui..."
                                placeholderTextColor={'#fff'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={'url'}
                            />
                        </ContainerInput>
                        <ButtonLink onPress={() => handleShortLink()}>
                            {loading ? <ActivityIndicator color="#121212" size={24} /> : <ButtonLinkText>Gerar Link</ButtonLinkText>}
                        </ButtonLink>
                    </ContainerContent>
                </KeyboardAvoidingView>
                <Modal visible={modalVisible} transparent animationType={'slide'} >
                    <ModalLink onClose={() => setModalVisible(false)} data={data} />
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}
