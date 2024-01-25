// 확장자는 jsx, js 둘 중 하나로 해도 되는데, 섞어서 쓰지 말고 통일성있게 사용할 것
// 파일명 첫글자는 대문자

import styled from "styled-components";


function Header() {
    return <Hd>header</Hd>
  }
  
  // 스타일
  const Hd = styled.div`
    height: 100px;
    background-color: yellowgreen;
  `
  // styled를 사용해서 header라는 태그를 만들어서, ``의 스타일값을 적용해라
  // ``내부에서 ; 사용해야함
  

export default Header