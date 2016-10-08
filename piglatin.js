function translatePigLatin(str) {
  var re = /[aeiou]/g;
  var x = [];
  var i = 0;
  var cl = console.log;

  if (!str[0].match(re)){
   while (!str[i].match(re)) {
     x[i] = str[i];
     i += 1;
   }
   
   x.push('a','y');
   cl(str.substr(i, str.length) +  x.join(''));

  } else {
   x = str.split('');
   x.push('w','a','y');
   cl(x.join(''));
  }
  return str;
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("eight");
