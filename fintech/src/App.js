const greeting = <h1>안녕하세요 리액트 입니다.</h1>;

const Welcome = () => {
  return <p>반갑습니다 !</p>;
};

function App() {
  return (
    <>
      {greeting}
      <Welcome></Welcome>
    </>
  );
}

export default App;
