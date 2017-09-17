import config from '../config.js'

export default class LS {
    
    static get(field) {
        if (LS._isExists()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if (!field) return data;
            if (data[ field ]) return data[ field ];

            return undefined;
        }
        return undefined;
    }

    static set(field, data = {}) {
        let dataToStorage = LS.get();
       
        if (!dataToStorage) dataToStorage = {
            users: [],
            orders: [],
            slots: {
                metal: [],
                british: []
            }
        };

       const addSlots = (arr, newSlot) => {
            if(arr.some(localSlot => localSlot.date === newSlot.date ? true : false)) {
                return arr.map(localSlot =>{
                    if(localSlot.date === newSlot.date){
                        return {...localSlot, slots: localSlot.slots.concat(newSlot.slots)}
                    } return localSlot
                })
            } else {
                return arr.concat(newSlot)
            }
        };

        const addUsers = (arr, newUser) =>{
            if(arr.some(localUser => localUser.userID === newUser.userID ? true : false)) {
                return arr.map(localUser =>{
                    if(localUser.userID === newUser.userID){
                        return {...localUser, orders: localUser.orders.concat(newUser.orders)}
                    } return localUser
                })
            } else {
                return arr.concat(newUser)
            }
        };

        
        switch (field) {
            case 'users':
                dataToStorage = {...dataToStorage, users: addUsers(dataToStorage.users, data)};
                break;
            case 'orders':
                dataToStorage = {...dataToStorage, orders: dataToStorage.orders.concat(data)};
                break;
            case 'slots':
                const hall = data.hall;
                const newSlot = data.slot;
                dataToStorage = {...dataToStorage, slots: {...dataToStorage.slots, [hall]: addSlots(dataToStorage.slots[hall], newSlot)}};
                break;
            default:
                dataToStorage[field] = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage))
    }

    static _isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }


}


