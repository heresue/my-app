import styled from "styled-components";



const Article = (props) => {
    return <Article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </Article>
  }
  
// 스타일
const ArticleWrap = styled.article`
background-color: gray;`
  


export default Article