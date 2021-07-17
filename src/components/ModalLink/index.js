import React from 'react'
import { View, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ModalContainer, Container, Header, Title, LinkArea, LongUrl, ShortLinkArea, ShortLinkUrl } from "./styles";
import Clipboard from '@react-native-community/clipboard';


export default function ModalLink(props) {

    function copylink() {
        Clipboard.setString(props.data.link),
            alert('Link copiado')
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Link: ${props.data.link}`
            })

            result.action === Share.sharedAction ?
                result.activityType ? console.log('ActivyType') : console.log('compartilhou')
                : 
                result.action === Share.dismissedAction && console.log('modal fechado')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ModalContainer>

            <TouchableWithoutFeedback onPress={() => { props.onClose() }}>
                <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>

            <Container>
                <Header>
                    <TouchableOpacity onPress={() => { props.onClose() }}>
                        <Icon name={'close'} size={30} color={'#212743'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleShare() }}>
                        <Icon name={'share'} size={30} color={'#212743'} />
                    </TouchableOpacity>
                </Header>

                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongUrl numberOfLines={1}>{props.data.long_url}</LongUrl>

                    <ShortLinkArea activeOpacity={1} onPress={() => copylink()}>
                        <ShortLinkUrl numberOfLines={1}>{props.data.link}</ShortLinkUrl>
                        <TouchableOpacity onPress={() => copylink()}>
                            <Icon name={'content-copy'} size={30} color={'#fff'} />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}
