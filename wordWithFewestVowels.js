/* 8. Create a function that accepts an array of strings and returns the word with the fewest vowels. */


const words = ["car", "bike", "train", "plane", "boat"];


const wordWithFewestVowels = (wordArray) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u'];

    const result = wordArray.reduce((prevWord, currentWord) => {
        const prevCount = prevWord.split('').filter(char => vowelList.includes(char)).length;
        const currentCount = currentWord.split('').filter(char => vowelList.includes(char)).length;
        return currentCount < prevCount ? currentWord : prevWord;
    });

    return result;
}

console.log(wordWithFewestVowels(words));
