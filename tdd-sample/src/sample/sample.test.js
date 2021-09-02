// 역으로 생각하기 => ex) 최댓값을 작성하는 함수에 대한 테스트 코드는?
// 배열값들을 불러와서 최대값을 toBe로 선택한다.

const stats = require("./sample");

describe("state", () => {
  it("find max value", () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it("find min value", () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
  it("find average", () => {
    expect(stats.average([1, 2, 3, 4, 5])).toBe(3);
  });
  describe("median", () => {
    it("sort data", () => {
      expect(stats.sort([3, 4, 1, 2])).toEqual([1, 2, 3, 4]);
    });
    it("짝수개일 때 중앙값", () => {
      expect(stats.median([1, 2, 3, 4])).toBe(2.5);
    });
    it("홀수개일 때 중앙값", () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });
  });
  describe("최빈값 구하기", () => {
    it("최빈값이 하나만 나오는 경우", () => {
      expect(stats.mode([1, 2, 2, 2, 3, 4])).toBe(2);
    });
    it("최빈값이 없는 경우", () => {
      expect(stats.mode([1, 2, 3, 4])).toBe(null);
    });
    it("최빈값이 2개인 경우", () => {
      expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    });
  });
});

/* 
-test 함수: 새로운 테스트 케이스를 만드는 함수(test 대신 it 사용해도 됨)

-expect는 함수를 입력받고, toBe를 통해 우리가 정한 값과 일치하는지 판별하며,
통과하면 테스트를 성공시키고, 아니면 실패시킨다.

-describe: 여러 테스트 케이스를 묶을 수 있음
*/
