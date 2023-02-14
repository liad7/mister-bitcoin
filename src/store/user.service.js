import { userService } from "../services/user.service.js"

export const userStore = {
    state: {
        user: null,
    },
    getters: {
        user({ user }) { return user },
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
    },
    actions: {
        async login({ commit }, { credentials }) {
            try {
                const user = await contactService.login(credentials)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('Cannot load contacts:', err)
                throw err
            }
        },
    }
}