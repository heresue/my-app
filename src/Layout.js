// 컴포넌트 만들기, 분리, 사용 (https://odada.me/254)

// App.js를 그대로 쓰는 경우도 있고, index.js에 불러와줘서 쓰는 경우도 있음

import Header from "./Header";
import Nav, { NavMobile } from "./Nav";
import Article from "./Article";
import Footer from "./Footer";
// import logo from './logo.svg';
// import './App.css';


// ★ 사용하지 않는것은 정리해주기!
// ★ return 괄호 주의
// ★ 컴포넌트로 만들거니까, Header, Footer 등등 대문자로 시작


// 컴포넌트 불러옴 //
function Layout() {

  // 컴포넌트가 아닌 일반배열이기 때문에 대문자 아니여도 됨
  const navArr = [
      { title: 'm-html' },
      { title: 'm-css' },
      { title: 'm-js' },
  ]

  return (
    // return 내부에는 하나의 태그만 존재해야 하고
    // 여러개의 태그를 사용하고 싶다면, <></> 또는 <Fragment><Fragment>를 사용한다.
    // 한 줄 이상일 경우 ()로 감싸준다.
    <div className="wrap">
      <Header/>
      <Nav/>
      <NavMobile nav={navArr}/>
      <Article title="html이란" desc="htmlhtml"/>
      <Article title="css란" desc="csscss"/>
      <Article title="js란" desc="jsjs"/>
      <Footer/>
    </div>
  )
}


// 컴포넌트를 가져올 때는 태그를 바로 닫아준다 < />

export default Layout;



