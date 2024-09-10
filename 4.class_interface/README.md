## class란?🏫

클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 툴로,

객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.

```javascript
class User(){ //=> class 함수는 첫 문자를 대문자로 약속🤙🏻
  name:string; // => 멤버 변수
  constructor(name){
    this.name = name;
  }

  method1(){
    console.log(this.name);
  }
}

const user = new User('hyun nam');
user.method();
// hyun nam
```

`new User()`를 호출하면 내부에서 정의한 메서드가 들어있는 **객체를 생성**합니다.

new 함수를 호출하면 constructor()로 객체를 초기화 합니다.

1. 새로운 객체가 생성된다.
2. 넘겨받은 인수와 함께 contructor()가 실행되며 초기화되며, this.name 에 할당
3. user.method() ~

- private : class 내부에서만 사용하는 속성을 만들 떄 사용한다.

```javascript
class Department {
  private employees: string[] = [];

  addEmployees(name: string) {
    this.employees.push(name);
  }

}
console.log(accounting.employees); => error
// 'employees' 속성은 private이며 'Department' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
```

- readonly : 읽기 전용 프로퍼티 => 초기화 이후 변경 되지 않는다.

- public : 외부에서도 엑세스 할 수 있다.(기본이 public)

**_약식 초기화_**

```typescript
class Department {
  // private id: string;
  // private name: string;

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

accounting.describe();
```

기존의 필드를 정의한 다음 생성자에서 받는 인수를 명시하고 `접근 제한자`가 달린 인수는,

`동일한 이름의 프로퍼티를 생성해 인수에서 받은 값을 프로퍼티에 저장한다.`

## 클래스의 상속(확장)

클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있습니다.

기존에 존재하던 기능을 토대로 새로운 기능을 만들 수 있죠.

```typescript
class Animal {
  constructor(public name) {
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");
```

```typescript
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
```

### 메서드 오버라이딩

특별한 사항이 없으면 class Rabbit은 class Animal에 있는 메서드를 ‘그대로’ 상속받습니다.

그런데 `Rabbit에서 stop() 등의 메서드를 자체적으로 정의하면,`

` 상속받은 메서드가 아닌 자체 메서드가 사용됩니다.`

```typescript
class Rabbit extends Animal {
  stop() {
    // rabbit.stop()을 호출할 때
    // Animal의 stop()이 아닌, 이 메서드가 사용됩니다.
  }
}
```

개발을 하다 보면 부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경하고 싶을 때가 생깁니다. 부모 메서드의 기능을 확장하고 싶을 때도 있죠. 이럴 때 커스텀 메서드를 만들어 작업하게 되는데, 이미 커스텀 메서드를 만들었더라도 이 과정 전·후에 부모 메서드를 호출하고 싶을 때가 있습니다.

**키워드 super는 이럴 때 사용합니다.**

`super.method(...)는 부모 클래스에 정의된 메서드, method를 호출합니다.`

`super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 할 수 있습니다.`

```typescript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name}가 멈췄습니다.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name}가 숨었습니다!`);
  }

  stop() {
    super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
    this.hide(); // 숨습니다.
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!
```

### 생성자 오버라이딩

클래스가 다른 클래스를 상속받고 constructor가 없는 경우엔 ‘비어있는’ constructor가 만들어집니다.

```typescript
class Rabbit extends Animal {
  constructor(...args) {
    super(...args);
  }
}
```

생성자는 기본적으로 부모 constructor를 호출합니다.
이때 부모 constructor에도 인수를 모두 전달합니다.

상속 클래스의 생성자에선 반드시 super(...)를 호출해야 하는데,

```typescript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

// 이제 에러 없이 동작합니다.
let rabbit = new Rabbit("흰 토끼", 10);
alert(rabbit.name); // 흰 토끼
alert(rabbit.earLength); // 10
```

1. 일반 클래스가 new와 함께 실행되면, 빈 객체가 만들어지고 this에 이 객체를 할당합니다.

2. 반면, 상속 클래스의 생성자 함수가 실행되면, 일반 클래스에서 일어난 일이 일어나지 않습니다.
   상속 클래스의 생성자 함수는 빈 객체를 만들고 this에 이 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주길 기대합니다.

이런 차이 때문에 상속 클래스의 생성자에선 super를 호출해 부모 생성자를 실행해 주어야 합니다. 그렇지 않으면 this가 될 객체가 만들어지지 않아 에러가 발생합니다.

아래 예시와 같이 this를 사용하기 전에 super()를 호출하면 Rabbit의 생성자가 제대로 동작합니다.
