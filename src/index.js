const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '', buf = '';
    for(let i = 0; i < expr.length; i += 10) {
        let str = expr.substr(i,10);
        for(let j = 0; j < str.length; j += 2) {
            if(str[j] === '*') {buf = ' '; break;}
            if(str[j] === '0') continue;
            else if(str[j + 1] === '0') buf += ('.');
            else buf += ('-');
        }
        if(buf !== ' ') result += MORSE_TABLE[buf];
        else result += ' ';
        buf = '';
    }
    return result;
}

module.exports = {
    decode
}