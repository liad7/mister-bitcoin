import { createStore } from 'vuex'
import { contactStore } from './contact.store.js'
import { userStore } from './user.store.js'

export const myStore = createStore({
    strict: true,
    modules: {
        contactStore,
        userStore,
    }
})

myStore.subscribe((cmd, state) => {
    console.log('**** Store state changed: ****')
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
    console.log('*******************************')
})