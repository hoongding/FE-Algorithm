// 결국 하나씩 탐색해야할듯.
// 길이 반까진 순차적으로 탐색하고 문자열 저장해놓고 length 제일 최소 return하기.
function solution(s) {
  const answer = [];
  let stack = [];

  for (let slice = 1; slice <= s.length / 2 + 1; slice++) {
    // 자르려는 길이로 나눠떨어진다면!!
    const strSlice = chunkString(s, slice);
    let newStr = '';

    for (let i = 0; i < strSlice.length; i++) {
      if (stack.length === 0 || stack[0] === strSlice[i])
        stack.push(strSlice[i]);
      else {
        const len = stack.length;
        if (len === 1) {
          newStr += stack[0];
          stack = [strSlice[i]];
        } else {
          const str = stack[0];
          stack = [strSlice[i]];
          newStr += `${len}${str}`;
        }
      }
    }

    const len = stack.length;
    if (len === 1) {
      newStr += stack[0];
      stack = [];
    } else {
      const str = stack[0];
      stack = [];
      newStr += `${len}${str}`;
    }
    answer.push(newStr.length);
  }
  return Math.min(...answer);
}

function chunkString(str, length) {
  //length의 길이 만큼 글자를 자른다.
  const reg = `.{1,${length}}`;
  return str.match(new RegExp(reg, 'g'));
  // 정규식으로 length의 길이만큼 잘라서 배열로 return 합니다.
}
