import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
  // document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// eov tizw 45
const  TodoList =()=>{
	return (
		   <ul>
		   	   <li>lkj</li>
		   	   <li>bm</li>
		   </ul>
	);
} ;

const  AppHeader=()=>{
	return <h1>mn Todo lk</h1>
} ;

const  SearchPanel=()=>{
	return <input placeholder="search" />;
} ;

const  App=()=>{
	return (
	   <div>
	   	   <AppHeader/>
	   	   <SearchPanel/>
	   	   <TodoList/>
	   </div>
	   );
} ;

ReactDOM.render(<App/>,
document.getElementById('root'));

