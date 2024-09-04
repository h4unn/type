## typescript란?

타입스크립트는 자바스크립트에 타입을 부여한 언어입니다.

자바스크립트의 확장된 언어라고 볼 수 있습니다. 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야 합니다. 이 변환 과정을 우리는 `컴파일(complile)` 이라고 부릅니다.

## typescript의 기능

1. 타입으로 작동하는 방식을 좀 더 명확하게 표현할 수 있다. => 에러 사전 방지 효과
2. 최신 IDE가 typescript 를 지원해, 자동완성을 개선, 가이드 => 개발 생산성 향상

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Understanding TypeScript</title>
    <script src="js-only.js" defer></script>
  </head>
  <body>
    <input type="number" id="num1" placeholder="Number 1" />
    <input type="number" id="num2" placeholder="Number 2" />
    <button>Add!</button>
  </body>
</html>
```

```javascript
const button = document.querySelector("button") as HTMLElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1:number, num2:number) {
   return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value)); // 10 + 5 = 105
});
```

_📌_  
input 의 값은 무조건 string 으로 들어온다. 해서 결과값이 '105'가 나오게 되는데
typescript 를 사용하면 결과값이 제대로 들어오는 걸 볼 수 있다. (장점...)

## typescript 설정 (terminal 실행)

```javascript
npm init

npm install -g typescript
// 안되면
sudo npm install -g typescript
// 컴파일 기능 tsc 를 사용해서 ts 파일을 js로 변환

//lite-server 설치
npm installl --save-dev lite-server

// package.json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "lite-server"
  },
```

### javascript 의 타입

- _number_ : 숫자타입
- _string_ : 문자타입
- _boolean_ : 불리언타입 - true,false(0)
- _object_ : 오브젝트 타입 - true,false(0)

```javascript
const person: object = {
  name: "hyun",
  age: 20,
};
console.log(person.name);
```

이 경우 person.name 의 name 부분에서 에러가 난다.

persone:object에 type 설정을 object로 하면 typescript 는 person의 타입이 object 인 것에만 집중하기 때문에
속성값을 가져오지 않는다.

`타입추론`을 사용하여 가져와보자

```javascript
const person = {
  name: "hyun",
  age: 20,
};
cosnole.log(person);
```

`타입추론`을 이용하여 에러를 없앨 수 있다.

📍다른 방법

```javascript
const persone: {
  name: string,
  age: number,
} = {
  name: "hyun",
  age: 20,
};
```

이 방법도 있지만 유동적이지 못함.

- _Array_ : 오브젝트 타입 - true,false(0)
- _Tuple_ : 튜플 타입 - 고정된 배열 타입

```javascript
const tupleType:[number,string] = [1,'chohyun']

tupleType = [10,'cho','nam'] => error
```

- _Enum_

`열거형으로 이름이 있는 상수들의 집합을 정의할 수 있습니다. 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있습니다. TypeScript는 숫자와 문자열-기반 열거형을 제공합니다.`

```javascript
enum Role {ADMIN,READ_ONLY,AUTHOR};
if(Role.ADMIN = 'ADMIN'){
  console.log('ADMIN');
}
```

ADMIN 은 1, READ*ONLY 은 2, AUTHOR 는 3의 값을 가집니다.
\_enum type 은 Tree-Shaking 이 되지 않는다는 단점을 가지고 있다*
ts파일을 컴파일한 소스를 보면

```javascript
(function (Role) {
  Role["ADMIN"] = 1;
  Role["READ_ONLY"] = 2;
  Role["AUTHOR"] = 3;
})(Role || (Role = {}));
```

이런 형식으로 컴파일링 된다.

이런 불필요한 로직을 없애기 위해

```javascript
export const orderStatusKeys = {
  주문대기중: 'received',
  주문완료: 'accepted',
  제작중: 'making',
  픽업완료: 'completed',
  취소된주문: 'canceled',
} as const;

//to compile
export const orderStatusKeys = {
    주문대기중: 'received',
    주문완료: 'accepted',
    제작중: 'making',
    픽업완료: 'completed',
    취소된주문: 'canceled',
};
```

이 코드는 아래와 같이 컴파일된다.
Typescript 코드에서는 orderStatusKeys의 타입을 정의한 이점을 그대로 누리면서 Javascript로 트랜스파일해도 IIFE가 생성되지 않으므로 Tree-shaking을 할 수가 있다.

- _any_ : 아무거나 타입 - vanila js 랑 다를게 없어 타입스크립트의 이점을 사용할 수 없으니 `주의해서 사용`
