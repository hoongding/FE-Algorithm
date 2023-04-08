// 상대팀 진영에 도착할 수 있는 칸의 최솟값
// 아예 못갈경우 -1 을 return
// [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
function solution(maps) {
  let answer = 1;
  let visited = maps; // 방문 배열
  let queue = [];
  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0; // 갔다 왔다고 표시!

  while (queue.length > 0) {
    let qLength = queue.length;
    for (let i = 0; i < qLength; i++) {
      let [y, x] = queue.shift();
      for (const [dy, dx] of directions) {
        let ny = y + dy;
        let nx = x + dx;
        if (nx >= 0 && nx < m && ny < n && ny >= 0 && maps[ny][nx] === 1) {
          if (ny === n - 1 && nx === m - 1) return ++answer;
          queue.push([ny, nx]);
          visited[ny][nx] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
}
