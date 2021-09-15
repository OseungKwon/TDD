const click = (function () {
  let count = 0;
  function changeNum(num) {
    count += num;
  }
  return {
    increase() {
      changeNum(1);
    },
    val() {
      return count;
    }
  };
})();

console.log("counter", click.val());
click.increase();
console.log("counter", click.val());
click.increase();
console.log("counter", click.val());
click.increase();
console.log("counter", click.val());
