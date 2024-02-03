/* 10 Write a function that takes an array of strings and returns the word with the fewest consonants. */

const words = ["sun", "moon", "stars", "planet", "galaxy"];

const wordWithFewestConsonants = (wordArray) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u'];

    const result = wordArray.reduce((prevWord, currentWord) => {
        const prevCount = prevWord.split('').filter(char => !vowelList.includes(char)).length;
        const currentCount = currentWord.split('').filter(char => !vowelList.includes(char)).length;
        return currentCount < prevCount ? currentWord : prevWord;
    });

    return result;
}

console.log(wordWithFewestConsonants(words));