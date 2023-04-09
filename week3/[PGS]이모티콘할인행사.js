// n명의 카카오톡 사용자들에게 m개의 이모티콘을 할인하여 판매.
// 할인율은 10 20 30 40% 중 하나.
// 1. 각 사용자들은 자신의 기준에 따라 일정 비율 이상 할인하는 이모티콘을 모두 구매합니다.
// 2. 각 사용자들은 자신의 기준에 따라 이모티콘 구매 비용의 합이 일정 가격 이상이 된다면, 이모티콘 구매를 모두 취소하고 이모티콘 플러스 서비스에 가입합니다.

// users : 구매기준을 담은 2차원 정수 배열
// emoticons : 이모티콘 m개의 정가를 담은 정수 배열
// 1. 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것.
// 2. 이모티콘 판매액을 최대한 늘리는 것.
function solution(users, emoticons) {
  const sale = [10, 20, 30, 40];
  const saleArr = permutation(sale, emoticons.length);
  const answer = [];
  saleArr.forEach((saleInfo) => {
    const result = [0, 0];
    users.forEach((user) => {
      const [userSale, userTotal] = user;
      let userBuyPrice = 0;
      for (let idx = 0; idx < emoticons.length; idx++) {
        if (saleInfo[idx] >= userSale) {
          userBuyPrice += emoticons[idx] * (100 - saleInfo[idx]) * 0.01;
          if (userBuyPrice >= userTotal) {
            result[0] += 1;
            break;
          }
        }
      }
      if (userBuyPrice < userTotal) {
        result[1] += userBuyPrice;
      }
    });
    answer.push(result);
  });
  return answer.sort()[answer.length - 1];
}

const permutation = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
};
