var minDeletions = function(s) {
    const n = s.length;
    const charCodeA = 'a'.charCodeAt(0);

    let charFrequency = new Array(26).fill(0);
    for(let i = 0; i < n; i += 1) {
        charFrequency[s.charCodeAt(i) - charCodeA] += 1;
    }

    charFrequency = charFrequency.filter((f) => f !== 0).sort((f1, f2) => f1 - f2);
    const countOccurrence = (element) => charFrequency.reduce((acc, frequency) => {
        if(frequency === element) acc += 1;
        return acc;
    }, 0);

    let result = 0;
    for(let i = 1; i < charFrequency.length; i += 1) {
        let newFrequency = charFrequency[i];
        while(newFrequency > 0 && countOccurrence(newFrequency) > 1) {
            newFrequency -= 1;
            charFrequency[i] = newFrequency;
            result += 1;
        }
    }

    return result;
};