// today : 오늘 날짜
//
function solution(today, terms, privacies) {
  const termsObj = terms.reduce((acc, cur) => {
    cur = cur.split(' ');
    acc[cur[0]] = +cur[1];
    return acc;
  }, {});
  const todayArr = today.split('.').map((item) => +item);

  let result = [];
  privacies.map((privacy, idx) => {
    if (checkValid(todayArr, termsObj, privacy)) result.push(idx + 1);
  });
  return result;
}

function checkValid(todayArr, termsObj, privacy) {
  let [privacyDay, privacyType] = privacy.split(' ');
  const expiredDay = termsObj[privacyType]; // 유효기간. Ex) 6달
  privacyDay = privacyDay.split('.').map((item) => +item); // 평가 날짜

  privacyDay[1] += expiredDay;

  while (privacyDay[1] > 12) {
    privacyDay[0] += 1;
    privacyDay[1] -= 12;
  }

  let [year, month, day] = privacyDay;
  let [todayYear, todayMonth, todayDay] = todayArr;

  year -= todayYear;
  month -= todayMonth;
  day -= todayDay + 1;

  // console.log(year, month, day)

  const result = [year, month, day];
  for (item of result) {
    if (item < 0) return true;
    if (item > 0) return false;
  }
}
