var isPowerOfFour = function(n) {
    
    if(n === 1) {
        return true;
    }
    
    if(n%4 !== 0 || n === 0) {
        return false;
    }
    
    return isPowerOfFour(n/4);
};

console.log(isPowerOfFour(256)); // true
console.log(isPowerOfFour(512)); // false
console.log(isPowerOfFour(560)); // false
console.log(isPowerOfFour(16384)); // true