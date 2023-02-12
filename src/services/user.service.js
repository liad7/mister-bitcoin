
import { dbService } from './db.service.js'

const KEY = 'userDB'

export const carService = {
    getUser,
}

async function getUser(id) {
    let user = await dbService.get(KEY, id)
    if (!user) {
        user = {
            name: "Puki Ben David",
            balance: 100,
            transactions: []
        }
        await dbService.insert(KEY, contacts)
    }
    return user
}
