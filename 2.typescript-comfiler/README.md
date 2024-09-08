# typescript 감시모드!👀

## 감시모드 사용 이유!

tsc app.ts를 사용해서 .js 변환 후 사용하면 conflict 난다...

매번 바꿀떄마다 확인하기도 힘들고 ...

```console
tsc app.ts -w
```

## 여러개의 파일을 comfile해야 할 떈?!

```console
cd typescript-comfiler // 해당 파일로 이동
tsc --init // tsconfig.json 파일 생성
```

**tsconfig.json** 의 설명

typescript 를 위한 프로젝트 파일 표시기,

이 폴더에 있는 프로젝트와 모든 하위 폴더는 타입스크립트로 관리되고 있다.

```console
tsc
```

=> .ts 로 생성된 파일들 전체를 .js로 변환해준다.(테스트 때 conflict 엄청 날거 같은데...)

**tsconfig.json**의 사용법

```javascript
"exclude": ["node_modules"],
"inclued": ["analytics.ts"],
"files": ["files"]
```

- exclude : uncomfile 할 file 을 지정한다.

: exclude가 없다면 node_modules 파일은 default

- inclued : comfile 할 file 을 지정

: 없다면 전체~

- files : 해당 파일 안에 있는 .ts 파일 전체를 comfile~

등등...
