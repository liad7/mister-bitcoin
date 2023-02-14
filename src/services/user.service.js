import { dbService } from './db.service.js'

const KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggeduser'

export const userService = {
    getUser,
    login,
    signup,
    logout,
    getEmptyCredentials,
}

function getEmptyCredentials(){
    return { username: "", password: "", fullname: "" }
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

async function login(userCred) {
    const users = await dbService.query(KEY)
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        // socketService.login(user._id)
        return saveLocalUser(user)
    }
    return Promise.reject()
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await dbService.post(KEY, userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.logout()
}

function saveLocalUser(user) {
    user = {_id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score}
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}