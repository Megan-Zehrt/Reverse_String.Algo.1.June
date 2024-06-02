// 344. Reverse String

// Write a function that reverses a string. The input is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    let j = s.length-1
    
    for(let i = 0; i < s.length/2; i++){

            let temp = s[j]

            s[j] = s[i]
            s[i] = temp

            j--
    }

    return s
};


// Oher Solution


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

    return s.reverse()
};