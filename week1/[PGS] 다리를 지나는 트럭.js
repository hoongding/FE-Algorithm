// weight : 최대무게
// bridge_length : 트럭이 최대 올라갈 수 있는 길이
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let onBridge = [...new Array(bridge_length)].map((item) => (item = 0));

  while (onBridge.length !== 0) {
    answer += 1;
    onBridge.shift();
    if (truck_weights.length !== 0) {
      if (sumWeights(onBridge) + truck_weights[0] <= weight) {
        onBridge.push(truck_weights[0]);
        truck_weights.shift();
      } else onBridge.push(0);
    }
  }
  return answer;
}

function sumWeights(onBridge) {
  return onBridge.reduce((sum, truck_weight) => sum + truck_weight, 0);
}
