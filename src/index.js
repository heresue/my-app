import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';   // 성능측정 (없어도됨)


// App.js를 그대로 쓰는 경우도 있고, index.js에 불러와줘서 쓰는 경우도 있음


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>   // 엄격모드(오류나면 알려줌)
    <App />
  // </React.StrictMode>  // 엄격모드(오류나면 알려줌)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();   // 성능측정 (없어도됨)