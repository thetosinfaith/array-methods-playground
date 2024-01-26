/* 5. write a function that takes an array of strings and returns the shortest word. */

function returnShortestWord(words) {
    let shortest = words[0];
    
    for (let word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    
    return shortest;
}

const words = ["apple", "banana", "ora", "pear"];
console.log(returnShortestWord(words)); 



