import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        async login(payload) {
            const response = await axios.post('/login', payload)
            this.user = response.data.user
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
        },

        async logout(payload) {
            await axios.delete(`/user/logout${payload.userId}`)
            axios.defaults.headers.common.Authorization = ""
        }
    }
})