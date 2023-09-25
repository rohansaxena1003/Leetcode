/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map();
      for(let c of s) {
        if(!map.has(c)) {
          map.set(c,0);
        }
        map.set(c, map.get(c)+1);
      }
  
      for(let c of t) {
        if(!map.has(c)) {
          map.set(c,0);
        }
        map.set(c, map.get(c)-1);
        if(map.get(c) == 0) {
          map.delete(c);
        }
      }
      // console.log(map);
      return Array.from(map)[0][0];
  };