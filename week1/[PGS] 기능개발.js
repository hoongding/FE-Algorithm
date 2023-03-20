// progresses : 작업의 진도가 배열
// speeds : 작업의 개발 속도가 적힌 정수 배열
// return : 몇 개의 기능이 배포되는지 return
// 배포는 하루에 한번만, 95%, 4%면 배포는 2일뒤에 이루어짐.
function solution(progresses, speeds) {
  let completeDay = [];

  for (const [progress, speed] of zip(progresses, speeds)) {
    completeDay.push(Math.ceil((100 - progress) / speed));
  }

  for (let i = 0; i < completeDay.length - 1; i++) {
    if (completeDay[i] > completeDay[i + 1])
      completeDay[i + 1] = completeDay[i];
  }

  const result = completeDay.reduce((acc, cur) => {
    // 동일 요소 Count 하기
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return Object.values(result);
}

function* zip(a, b) {
  // Generator로 구현..
  // Python의 zip 함수 활용
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) yield [a[i], b[i]];
}
