// 최댓값
exports.max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((number) => {
    if (number > result) {
      result = number;
    }
  });
  return result;
};
// 최솟값
exports.min = (numbers) => Math.min(...numbers);
// 평균값 //TypeError: stats.average is not a function가 나왔다? 그럼 만들어서 고치면 됨
exports.average = (numbers) =>
  numbers.reduce((acc, cur) => acc + cur) / numbers.length;

exports.sort = (numbers) => numbers.sort((a, b) => a - b);
exports.median = (numbers) => {
  const middle = Math.floor(numbers.length / 2);
  if (numbers.length % 2) {
    return numbers[middle];
  }
  return (numbers[middle - 1] + numbers[middle]) / 2;
};
exports.mode = (numbers) => {
  const frequency = new Map();
  numbers.forEach((number) => {
    const count = frequency.get(number) || 0;
    frequency.set(number, count + 1);
  });
  const max = Math.max(...frequency.values());
  if (max === 1) {
    return null;
  }
  const result = [...frequency.keys()].filter(
    (num) => frequency.get(num) === max
  );
  if (result.length > 1) {
    return result;
  }
  return result[0];
};
// 함수 앞에 export를 붙이거나, 여기에서 다음과 같이 코드 작성해 내보내준다.
/*
exports.sum = sum;
exports.sumOf = sumOf;
*/
