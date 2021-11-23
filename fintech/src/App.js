const greeting = <h1>안녕하세요 리액트 입니다.</h1>;

const Welcome = (props) => {
  console.log(props);
  return (
    <p>
      반갑습니다 {props.username} 님 나이는 {props.userage} 세 입니다. !
    </p>
  );
};
// 컴포넌트

function App() {
  return (
    <>
      {greeting}
      <Welcome username="홍길동" userage="30"></Welcome>
      <Welcome username="고길동" userage="36"></Welcome>
    </>
  );
}

export default App;
