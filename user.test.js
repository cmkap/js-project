const User = require('./user');

describe('User', () => {
    it('user.getName returns Uma', () => {
        const user = new User('Uma');
        expect(user.getName()).toBe('Uma');
    });

    it('user.getIntroduction returns "Hi, my name is Uma"', () => {
        const user = new User('Uma');
        expect(user.getIntroduction()).toBe('Hi, my name is Uma');
    });
});