function indexOfFirstVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        if (vowels.includes(char)) {
            return i;
        }
    }

    return -1;
}


function translateWordToPigLatin(word) {
    let firstVowelIndex = indexOfFirstVowel(word);
    if (firstVowelIndex === -1) {
        return word;
    }
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
}

function translate(phrase) {
    let words = phrase.split(" ").map(word => translateWordToPigLatin(word));
    return words.join(" ");
}
