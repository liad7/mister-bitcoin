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
                const user = await userService.login(credentials)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('Cannot do login:', err)
                throw err
            }
        },
        async signup({ commit }, { credentials }) {
            try {
                const user = await userService.signup(credentials)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.log('Cannot signup:', err)
                throw err
            }
        },
        async loguot({ commit }) {
            try {
                const user = await userService.loguot()
                commit({ type: 'setUser', user: null })
            } catch (err) {
                console.log('Cannot logout:', err)
                throw err
            }
        },
    }
}