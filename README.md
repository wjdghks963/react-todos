## React Hook Form

react에서 form을 쉽게 관리 할 수 있는 라이브러리

```
npm install react-hook-form
```

만약에 form안에 input들이 많아진다면 상태를 관리하기 힘들어진다.

```javascript
const { register } = useForm();

<input {...register("email", { required: true,validate: (value) => !value.includes("jung"), })} placeholder="Email" ,/>;

```

1. ...register은 스레드 상태로 사용해야하고 첫번째 인자는 input의 name과 같은 기능을 한다.

2. 위와 같이 사용하고 watch()를 사용한다면 담기는 값을 실시간으로 볼 수 있다.
   HTML태그로 required를 사용하지 않는 대신 JS로 사용한다면 목적 이외의 상황에 대해 보호 받을 수 있다.

3. required 이외 minLength와 같은 기능도 사용 가능하다.
   true 대신 message를 넣어서 error가 나면 message를 대신 내보낸다.

4. validate(값이 있냐)를 통해 validate를 확인할 수 있다.
   만약 value가 "jung"을 포함한다면 false를 반환해 error를 내고 true면 통과한다.

---

```javascript
const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
<form onSubmit={handleSubmit(onValid,onInValid)}>

```

react-hook-form이 모든 validation을 다 마쳤을 때만 호출된다.

handleSubmit 안에 데이터가 있을때는 필수로 없을때(2번째 인자)는 선택적으로

---

```
useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
```

위와 같이 useForm에서 defaultValues를 설정할 수 있는데 form안에 있는 element에서 먼저 기본값을 설정해둘수있다.

email input에 placeholder대신 @naver.com이 먼저 들어가 있다.

---

---

## Recoil

```javascript
const [value, modFn] = useRecoilState(toDoState);
const value = useRecoilValue(toDoState);
const modFn = useSetRecoilState(toDoState);
```

1. useRecoilValue : value를 이용하고 싶을때
2. useSetRecoilState: value를 set하고 싶을때
3. useRecoilState : value를 useState와 같은 기능을 쓰고 싶을때

### atom

```javascipt
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
```

1. key는 내부적으로 atom을 식별하는데 사용되는 고유한 문자열. 다른 atom과 selector에 대해 고유해야함.

2. defalut는 **atom의 초깃값** Promise또는 동일한 타입의 값을 나타내는 다른 atom이나 selecotr

### atom selector

atom의 output을 변형시키는 도구
