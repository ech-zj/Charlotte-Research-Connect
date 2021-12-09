/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const settings = require('../settings.json')
const BaseApiUrl = settings.DevEnv ? settings.NoSSL : settings.APIBase

export default {
    verify: async token => {
        let res = await axios.get(`${BaseApiUrl}/a/user/verify`, { headers: { 'Authorization': `Bearer ${token}` } })
            .catch(e => { console.warn(e.response.data); return { isErrored: true, error: e.response.data } })
        return res
    },
    updateRoles: async (FormData, token) => {
        let res = await axios.post(`${BaseApiUrl}/a/user/role/edit`, FormData, { headers: { 'Authorization': `Bearer ${token}` } })
            .catch(e => { console.warn(e.response.data); return { isErrored: true, error: e.response.data } })
        return res
    }
}