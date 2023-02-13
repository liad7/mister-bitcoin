import { createStore } from 'vuex'
import { contactStore } from './contact.store.js'

export const myStore = createStore({
    strict: true,
    modules: {
        contactStore,
    }
})

myStore.subscribe((cmd, state) => {
    console.log('**** Store state changed: ****')
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
    console.log('*******************************')
})