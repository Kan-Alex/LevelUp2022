const capsLockTests = ['cAPS', 'Lock', 'wHY DO wE NEED cAPS lOCK?', 'FuNkY iS nOt CaPs!']

function capsLock(str) {
    const words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split('')
        if (letters.every(elem => elem === elem.toUpperCase()) || letters.slice(1).every(elem => elem === elem.toUpperCase())) {
            for (let l = 0; l < letters.length; l++) {
                if (letters[l] === letters[l].toUpperCase()) {
                    letters[l] = letters[l].toLowerCase()
                }else {
                    letters[l] = letters[l].toUpperCase()
                }
            }
        }
        words[i] = letters.join('')
    }
    str = words.join(' ')
    return str
}
for (let t = 0; t < capsLockTests.length; t++) {
    const test = capsLockTests[t]
    console.log(capsLock(test))
}