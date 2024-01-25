import styled from "styled-components";


const Nav = () => {

    // js코드는 여기에 넣어준다(return 앞)
    // const arr = [1, 2, 3]
    const list = [
        <li>
            <a href="/">html</a>
        </li>,
        <li>
            <a href="/">css</a>
        </li>,
        <li>
            <a href="/">js</a>
        </li>
    ]

    return (
        <nav>
            {/* 문자가 아닌 데이터를 받을 땐, {}로 감싸주어야 한다. */}
            <ul>{list}</ul>
        </nav>
    );
  };
// a href안에 # 말고 /로 써줌 (a태그를 잘 안씀)


export const NavMobile = (props) => {
    // const arr = [1, 2, 3]
    console.log(props)                // {nav: Array(3)}
    console.log(props.nav)            // (3) [{}, {}, {}]
    console.log(props.nav[0])         // {title: "html"}
    console.log(props.nav[0].title)   // html
    console.log(props.nav[1])         // {title: "css"}
    const list = [];
    for (let i = 0; i < props.nav.length; i++) {
        list.push(
            <li>
                <a href={'/sub/' + props.nav[i].title + '.html'}>{props.nav[i].title}</a>
            </li>
        )
    }

    return (
        <nav>
            <ul>{list}</ul>
        </nav>
    );
  };

// 스타일



export default Nav
// export { NavMobile }    // default가 아니니 {} 사용
//  함수선언문일 경우, 위에서 바로 export 해줘도 됨
//  표현식은 안됨. (원하는 방식으로 정해서 하기)
