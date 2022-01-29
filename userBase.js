class UserBase {
    constructor(users) {
        this.users = users;
    }
    count() {
        return this.users.length;
    }
    getNames() {
        return this.users.map( item => {
           return item.user
        })
    }
    getIntroduction() {
        return this.users.map( item => {
        return `Hi, my name is ${item.user}`
     })

    }


}
module.exports = UserBase;