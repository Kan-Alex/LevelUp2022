const words = ['localization', 'Uncopyrightable', 'word', 'Trichotillomania', '1', 'Unimaginatively', 'aboba', 'Sesquipedalianism', 'Tergiversation']

for (const word of words) {
                       
    const interval = word.length - 2

    function lastletter(arr) {
        return arr[arr.length - 1]
    }
    
    if(word.length > 10) {
        console.log(word[0] + interval + lastletter(word))
    }

}
// Array.prototype.abriviatur = function() {
//     for (const word of this) {
                       
//         const interval = word.length - 2
    
//         function lastletter(arr) {
//             return arr[arr.length - 1]
//         }
        
//         if(word.length > 10) {
//             console.log(word[0] + interval + lastletter(word))
//         }
    
//     }
// }