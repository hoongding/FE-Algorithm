function solution(s) {
  const sArr = s.split(' ');
  const JadenCase = sArr
    .map((item) =>
      [...item]
        .map((char, idx) =>
          idx === 0 ? makeUpperCase(char) : makeLowerCase(char)
        )
        .join('')
    )
    .join(' ');
  return JadenCase;
}

function makeUpperCase(char) {
  if (isNaN(char)) return char.toUpperCase();
  else return char;
}

function makeLowerCase(char) {
  if (isNaN(char)) return char.toLowerCase();
  else return char;
}
