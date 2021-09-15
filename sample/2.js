const a = 1;

function first() {
  const a = 2;

  function second() {
    console.log(a);
  }

  return second;
}

const runc = first();
runc();
// 함수를 어디에서 호출하던 상관없이
// 함수는 언제나 자신이 기억하는
// 상위 스코프의 식별자를 참조할 수 있으며 식별자에 바인딩된 값을 변경할 수도 있다.
