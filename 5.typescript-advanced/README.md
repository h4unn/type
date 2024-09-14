# Union Type, Intersection Type, Etc...🙏(feat..optional chaining)

## Union Type

Union 은 합집합이다. **|** 로 구분하고 javascript 의 OR 연산자와 비슷한 역활을 한다.(영단어 union 자체가 '합집합'이라는 뜻)

```typescript
type Marvel = "IronMan" | "Captain";
type Dc = "Batman" | "Superman";
```

```typescript
type Hero = Marvel | Dc;
// "IronMan" | "Captain" | "Batman" | "Superman" 모두 가능

const iAm: Hero = "IronMan"; //OK
```

타입 지정을 Hero로 하면 Marvel ,Dc 의 모든 영웅을 할당 할 수 있다.

## Intersection Type

Intersection 은 교집합이다. 여러 타입을 조합하여 하나의 타입으로 만들수 있다.

교차 타입은 **&** 로 타입을 결합한다.

```typescript
type Admin = {
  name: string;
  privileges: Array<T>;
};

type Employee = {
  name: string;
  startDate: Data;
};

type ElevatedEmployee = Admin & Employee;

const authority: ElevatedEmployee = {
  name: "hyun nam",
  privileges: ["Front-end"],
  startDate: new Date(),
};

// ex)
const authority: ElevatedEmployee = {
  // => error startDate까지 사용해야 된다
  name: "hyun nam",
  privileges: ["Front-end"],
};
```

Admin 과 Employee 타입의 교집합 된 부분은 하나로, 나머지 타입들도 모두 사용해야 된다.

## optional chaining

?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.

설명이 장황해지지 않도록 지금부턴 평가후 결과가 null이나 undefined가 아닌 경우엔 값이 ‘있다’ 혹은 '존재한다’라고 표현하겠습니다.

```typescript
let user = {}; // 주소 정보가 없는 사용자

alert(user?.address?.street); // undefined, 에러가 발생하지 않습니다.
```

> 사용자 주소를 다루는 위 예시에서 논리상 user는 반드시 있어야 하는데 address는 필수값이 아닙니다. 그러니 user.address?.street를 사용하는 것이 바람직합니다.

- 단락 평가

?.는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춥니다. 참고로 이런 평가 방법을 단락 평가(short-circuit)라고 부릅니다.

**optional chaining 요약!**

옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있습니다.

1. obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
2. obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
3. obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

?.를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있습니다.

?.은 ?.왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 합니다.
