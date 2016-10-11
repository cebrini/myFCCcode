function convertToRoman(num) {
   var roman = { M: 1000, CM: 900, D: 500, CD: 400,
                 C:  100, XC:  90, L:  50, XL:  40,
                 X:   10, IX:   9, V:   5, IV:   4,
                 I:    1 };
    var intialvalue = { str: '', num: num};

    function reducer(acc, ch) {
       acc.str += ch.repeat(acc.num / roman[ch]);
       acc.num %= roman[ch];
       return acc;
    }

    return Object.keys(roman).
                            reduce(reducer, intialvalue).
                                                         str;
}

convertToRoman(36);

