class User {
    constructor(user) {
        this.user = user;
    }
    getName() { 
        return this.user; 
    }

    getIntroduction() { 
        return `Hi, my name is ${this.user}`
    }

}

module.exports = User;