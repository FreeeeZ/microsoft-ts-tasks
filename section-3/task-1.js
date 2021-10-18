"use strict";
let iceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(iceCream.flavor);
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
console.log(myIceCream.sauce);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
