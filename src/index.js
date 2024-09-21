const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedStr = '';
    for (i = 0; i < expr.length / 10; i += 1) {
        const letter = expr.slice(i * 10, i * 10 + 10)
        let morseCode = '';
        if (letter === '**********') {
            decodedStr += ' ';
        }
        else {
            for (j = 0; j < letter.length / 2; j += 1) {
                const fragment = letter.slice(j * 2, j * 2 + 2)
                if (fragment === '10') {
                    morseCode += '.';
                }
                if (fragment === '11') {
                    morseCode += '-';
                }
            }
            decodedStr += MORSE_TABLE[morseCode]
        }
    }
    return decodedStr;
}

module.exports = {
    decode
}