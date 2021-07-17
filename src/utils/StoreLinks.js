import AsyncStorage from '@react-native-async-storage/async-storage'

export const getLinksSaves = async (key) => {
    const res = await AsyncStorage.getItem(key)
    let resConvertida = JSON.parse(res) || []
    return resConvertida
}

export const saveLink = async (key, newLink) => {
    let linksSalvos = await getLinksSaves(key)
    const linkJaExiste = linksSalvos.some(link => link.id === newLink.id)
    linkJaExiste ? console.log('link ja existe') : linksSalvos.push(newLink); await AsyncStorage.setItem(key, JSON.stringify(linksSalvos))
}

export const deleteLink = async (links, id) => {
    let myLinks = links.filter((i) => i.id !== id)
    await AsyncStorage.setItem('link', JSON.stringify(myLinks))
    return myLinks
}

