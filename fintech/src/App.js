import TopHeader from "./components/common/TopHeader";
import ListExmaple from "./components/ListExmaple";
import StateExample from "./components/StateExample";
import Welcome from "./components/Welcome";

const greeting = <h1>안녕하세요 리액트 입니다.</h1>;

function App() {
  return (
    <>
      <TopHeader title="연습장"></TopHeader>
      {greeting}
      <Welcome username="홍길동" userage="30"></Welcome>
      <Welcome username="고길동" userage="36"></Welcome>
      <StateExample></StateExample>
      <ListExmaple></ListExmaple>
    </>
  );
}

export default App;
