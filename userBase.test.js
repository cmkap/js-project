const User = require('./user')
const UserBase = require('./userBase');

describe('UserBase', () => {
    it('returns the count of users', () => {
        const users = [
            new User('Uma'),
            new User('Josh'),
            new User('Ollie')
        ];
        const userBase = new UserBase(users);
        expect(userBase.count(users)).toEqual(3);
    });
    it('returns the names of users', () => {
        const users = [
            new User('Uma'),
            new User('Josh'),
            new User('Ollie')
        ];
        const userBase = new UserBase(users);
        expect(userBase.getNames()).toEqual(['Uma', 'Josh', 'Ollie']);
    });

    it('returns an introduction of users', () => {
        const users = [
            new User('Uma'),
            new User('Josh'),
            new User('Ollie')
        ];
        const userBase = new UserBase(users);
        expect(userBase.getIntroduction()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie']);
    });
}); 