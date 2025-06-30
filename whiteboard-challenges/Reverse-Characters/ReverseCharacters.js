

function ReverseCharacters(strings) {
    let reversedString = '';
    for (let i = strings.length - 1; i >= 0; i--) {
        reversedString += strings[i];
    }
    return reversedString;
}
console.log(ReverseCharacters());
/* "javascript"
 "elyts"
 "nadroj"
 "abc564"
*/