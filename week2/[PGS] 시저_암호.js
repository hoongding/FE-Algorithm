// 65 ~ 90 : A ~ Z
// 97 ~ 122 : a ~ z
// 90일땐 65로
// 122일땐 97로
// n만큼 민다.
function solution(s, n) {
  const answer = [...s].map((char) =>
    String.fromCharCode(changeEachAlphabet(char, n))
  );
  return answer.reduce((acc, cur) => {
    if (cur === '$') return (acc += ' ');
    else return (acc += cur);
  }, '');
}

function changeEachAlphabet(char, n) {
  let asciiCode = char.charCodeAt();
  if (65 <= asciiCode && asciiCode <= 90) {
    // 소문자일때
    return (asciiCode += n) > 90 ? (asciiCode -= 26) : asciiCode;
  } else if (97 <= asciiCode && asciiCode <= 122) {
    // 대문자일때
    return (asciiCode += n) > 122 ? (asciiCode -= 26) : asciiCode;
  } else return asciiCode;
  // 공백일땐 그냥 return
}
