/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    return 100 - Math.round((purchaseAmount) / 10)*10; 
};

console.log(accountBalanceAfterPurchase(9)); // 90
console.log(accountBalanceAfterPurchase(15)); // 80
console.log(accountBalanceAfterPurchase(21)); // 80
console.log(accountBalanceAfterPurchase(25)); // 70
console.log(accountBalanceAfterPurchase(67)); // 40
console.log(accountBalanceAfterPurchase(11)); // 90
