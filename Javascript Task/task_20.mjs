// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
function ListLanguage(Language_1, Language_2, Language_3, Language_4) {
    const arr = new Array(Language_1, Language_2,Language_3,Language_4);
    return arr ;
}

const list = ListLanguage("Turkish", "Urdu", "Arabic", "English");
console.log("I know the Languages:",list)