import Layout from "./Layout"


function App() {
  return (
    <>
      <Layout/>
      {/* 부모 컴포넌트 */}
      {/* {name: '가울', age: 2}객채가 Cat컴포넌트로 전달 */}
      <Cat name="가을" age="2" />
      <Cat name="겨울" age="3" />
      <Cat name="봄" age="6" />
    </>
  );
}

// 자식 컴포넌트
const Cat = (props) => {
  // const props = {name: '가을', age: 2}
  const { name, age } = props // 구조분해 (props.name 이 아닌 name으로 바로 사용가능)
  // 또는, 매개변수 자리에서 바로 구조분해하면 됨
  //  const Cat = ({ name, age }) => { return ~~~ }
  return (
    <>
      <div>
        {name}이는 {age}살 입니다.
      </div>
    </>
  );
};

export default App;
// export Layout;
