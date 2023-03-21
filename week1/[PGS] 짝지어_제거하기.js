// s : 문자열
// 아무것도 없으면 0을 return
// 모두 제거 가능하면 1을 return
function solution(s) {
  const sArr = s.split('');
  const stack = [];
  for (str of sArr) {
    if (stack.length === 0) stack.push(str);
    else if (stack[stack.length - 1] !== str) stack.push(str);
    else stack.pop();
  }
  return stack.length === 0 ? 1 : 0;
}
