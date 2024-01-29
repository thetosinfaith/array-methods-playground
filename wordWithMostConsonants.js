/* 9. Implement a function that takes an array of strings and returns the word with the most consonants. */


const words = ["house", "apartment", "cabin", "mansion", "shack"];


const wordWithMostConsonants = (wordArray) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u'];

    const result = wordArray.reduce((prevWord, currentWord) => {
        const prevCount = prevWord.split('').filter(char => !vowelList.includes(char)).length;
        const currentCount = currentWord.split('').filter(char => !vowelList.includes(char)).length;
        return currentCount > prevCount ? currentWord : prevWord;
    });

    return result;
}

console.log(wordWithMostConsonants(words));