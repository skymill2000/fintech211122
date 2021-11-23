const Welcome = ({ username, userage }) => {
  // const { username, userage } = props; // 구조분해 예시 기본
  return (
    <p>
      안녕하세요 {username} 님 나이는 {userage} 세 입니다. !
    </p>
  );
};

export default Welcome;
