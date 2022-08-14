const word = 'localization'

const interval = word.length - 2

function lastletter(arr) {
    return arr[arr.length - 1]
}

if (word.length > 10) {
    console.log(word[0] + interval + lastletter(word))
}
