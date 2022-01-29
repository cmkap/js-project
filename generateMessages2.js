const generateMessages = (namesAndDiscounts) => {
    return namesAndDiscounts.map( element => {
        const name = element.name
        const discount = element.discount
        return `Hi ${name} ${discount}% off our best candies for you today!`;
    });
}

// An array of objects!
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla',discount:  6 }
];

generateMessages(namesAndDiscounts);