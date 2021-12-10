/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const settings = require('../settings.json')
const BaseApiUrl = settings.DevEnv ? settings.NoSSL : settings.APIBase

export default {
    edit: async (FormData, token) => {
        let res = await axios.patch(`${BaseApiUrl}/a/sub/edit`, FormData, { headers: { 'Authorization': `Bearer ${token}` } })
            .catch(e => { console.warn(e.response.data); return { isErrored: true, error: e.response.data } })
        return res
    }
}