import { defineStore } from "pinia"
import axios from "axios"

export const useRequestStore = defineStore("request", {
    state: () => ({
        messages: {}
    }),
    actions: {
        async get (payload) {
            // code that will display an action modal (probably using a bus event)
            try {
                const response = await axios.get(payload.url)
                return [response.data, false]
            }
            catch (error) {
                console.error(error.response)
                return [null, error]
            }
        },

        async post (payload) {
            try {
                const response = await axios.post(payload.url, payload.formData, payload.headers)
                return [response.data, false]
            }
            catch (error) {
                console.error(error.response)
                return [null, error]
            }
        },

        async patch (payload) {
            try {
                const response = await axios.patch(payload.url, payload.formData)
                return [response.data, false]
            }
            catch (error) {
                console.error(error.response)
                return [null, error]
            }
        },

        async delete (payload) {
            try {
                const response = await axios.delete(payload.url)
                return [response.data, false]
            }
            catch (error) {
                console.error(error.response)
                return [null, error]
            }
        }
    }
})
