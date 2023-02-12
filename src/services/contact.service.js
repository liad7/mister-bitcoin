'use strict'

import { dbService } from './db.service.js'

const KEY = 'contactDB'

export const carService = {
    query,
    get,
    remove,
    save,
    getEmptyContact,
}

async function query() {
    let contacts = await dbService.query(KEY)

    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        await dbService.insert(KEY, contacts)
    }
    return contacts
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(conatct) {
    if (conatct._id) return await dbService.put(KEY, conatct)
    return await dbService.post(KEY, conatct)
}

function getEmptyContact() {
    return {
        vendor: '',
        speed: 0,
    }
}

function _createDefaultContacts() {
    return [
        _createContact('audi', 50),
        _createContact('fiat', 73),
        _createContact('honda', 100),
        _createContact('suzuki', 100),
    ]
}

function _createContact(vendor, speed) {
    return {
        vendor,
        speed,
    }
}
