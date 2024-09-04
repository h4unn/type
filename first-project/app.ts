// function combine(inp1: number, inp2: number) {
//   const result = inp1 + inp2;
//   return result;
// }

// const combinedAges = combine(30, 20);
// const combinedNames = combine('cho','hyun'); => error

// function combine(inp1: number | string, inp2: number | string) {
//   const result = inp1 + inp2; => error
//   return result;
// }

// const combinedAges = combine(30, 20);

function combine(inp1: number | string, inp2: number | string) {
  let result;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  } else {
    result = inp1.toString() + inp2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20);

/*
  유니온 타입
  숫자 문자 상관없이 받을 수 있다?

*/
