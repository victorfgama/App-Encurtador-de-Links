//f7346ce71229fdbbf57a6377ee8f87b741436ee6

import axios from 'axios'

const url = 'https://api-ssl.bitly.com/v4/'

export const token = 'Bearer f7346ce71229fdbbf57a6377ee8f87b741436ee6'

const api = axios.create({
    baseURL:url,
    headers:{
        'Content-Type': 'application/json',
        'Authorization': token 
    }
})

export default api