import Welcome from "./components/Welcome";

const greeting = <h1>안녕하세요 리액트 입니다.</h1>;

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
