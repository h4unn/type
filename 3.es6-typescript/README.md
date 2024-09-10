## es6와 Type Script

- 스프레드 연산자
  **배열 및 객체에 저장된 데이터를 검색하는 방법!**

  ```javascript
  const hobbies = ["sports", "cooking"];
  const activeHobbies = ["Hiking"];

  activeHobbies.push(...hobbies);
  console.log(activeHobbies);

  // (3) ['Hiking', 'sports', 'cooking']
  ```

  배열은 객체이고 객체는 참조 값,

  메모르는 변경되지만, 주소는 변경되지 않는다.

  배열의 요소를 가져 올 때 사용한다.

  ```javascript
  const hobbies = ["sports", "cooking"];
  const activeHobbies = ["Hiking"];

  activeHibbies.push(hobbies); // >> error 중첩 배열
  activeHibbies.push(hobbies[0], hobbies[1]); // >> error x (이렇게 가져오면 힘들어..)
  const activeHibbies = ["Hiking", ...hobbies]; // 좋은 방법!
  ```

- rest parameters(스프레드 연산자)
  메개변수를 유동적으로 사용할 수 있다.

```javascript
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 3, 5, 67, 8);
console.log(addNumbers);
```

- 배열 및 객체 비구조화 할당
  **배열 디스트럭처링**

```javascript
const hobbies = ["sports", "cooking"];
const [hobbie1, hobbie2, ...remainningHibbies] = hobbies;

console.log(hobbies, hobbie1, hobbie2);
// (2) ['sports', 'cooking'] 'sports' 'cooking'
```

**객체 비구조화 할당**

```javascript
const person = {
  name: "cho",
  age: 20,
};
const { name, age } = person;
console.log(name, age);
//cho 20
```
