const Welcome = ({ username, userage, userheight }) => {
  // const { username, userage } = props; // 구조분해 예시 기본
  return (
    <p>
      안녕하세요 {username} 님 나이는 {userage} 세 입니다. 키는 {userheight}
      입니다. !
    </p>
  );
};

export default Welcome;
