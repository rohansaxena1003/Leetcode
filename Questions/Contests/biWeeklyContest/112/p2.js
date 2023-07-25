var sortVowels = function(s) {
    let arr = getVowelArrays(s);
    let str = '';
    let i = 0;
    for(let c of s) {
        if(checkIfVowel(c)) {
            str+= arr[i++];
        } else {
            str+=c;
        }
    }

    return str;
};

function getVowelArrays(s) {
    let arr = [];
    for(let c of s) {
        if(checkIfVowel(c)) {
            arr.push(c);
        }
    }

    arr.sort();
    return arr;
}

function checkIfVowel(c) {
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u' || c=='A' || c=='E' || c=='I' || c=='O' || c=='U') {
        return true;
    }

    return false;
}

console.log(sortVowels("lEetcOde"));
console.log(sortVowels("lYmpH"));
