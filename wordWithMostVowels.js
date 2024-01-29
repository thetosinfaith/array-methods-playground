/*

7. Develop a function that receives an array of 
   strings and returns the word with the most vowels.
*/

const wordArray = ["cat", "dog", "bird", "elephant", "fish"];

const wordWithMostVowels = (wordArray) => {
    const vowelList = ['a', 'e', 'i', 'o', 'u'];

    const result = wordArray.reduce((prevWord, currentWord) => {
        const prevCount = prevWord.split('').filter(char => vowelList.includes(char)).length;
        const currentCount = currentWord.split('').filter(char => vowelList.includes(char)).length;
        return currentCount > prevCount ? currentWord : prevWord;
    });

    return result;
}

 
console.log(wordWithMostVowels(wordArray));