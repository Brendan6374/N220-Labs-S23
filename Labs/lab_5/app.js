function isVowel(char) {
    char = char.toLocaleLowerCase();
    if(char == "a" || char == "e" || char == "i"  || char == "o" || char == "u"){
        return true;
    }

    return false;
}

console.log( isVowel("a") );