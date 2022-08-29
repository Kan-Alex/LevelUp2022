const words = ['localization', 'Uncopyrightable', 'word', 'Trichotillomania', '1', 'Unimaginatively', 'aboba', 'Sesquipedalianism', 'Tergiversation']

for (const word of words) {
                       
    const interval = word.length - 2

    if(word.length > 10) {
        console.log(word[0] + interval + word[word.length - 1])
    }

}
// Array.prototype.abriviatur = function() {
//     for (const word of this) {
                       
//         const interval = word.length - 2

//         if(word.length > 10) {
//             console.log(word[0] + interval + word[word.length - 1])
//         }
    
//     }
// }