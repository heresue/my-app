import styled from "styled-components";


// 일반 함수로 정의
// const Footer = function () {
//   return <Ft>footer</Ft>
// }

// 화살표 함수로 정의
const Footer = () => <Ft>footer</Ft>


// 스타일
const Ft = styled.footer`
  height: 100px;
  background-color: #eee;
`

export default Footer