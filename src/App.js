import logo from './logo.svg';
import './App.css';
// var p1 = {
//   ten :"man hinh",
//   gia:90
// }
// console.log(p1);
// var p2 = {...p1} ; 
// p2.gia =100;
// console.log(p2);
// console.log(p1);

var redux = require('redux');
var oldState = {
  num:["man hinh","chuot","ban phim"],
  editstatus:true
}
var reducer1 = (state=oldState,action) =>{
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
       return {...state,editstatus:!state.editstatus}
      break;
      case "ADD_NEW":
        return {...state,num:[...state.num,action.newItem]}
       break;
      case "DELETE":
        return {...state,num:state.num.filter((value,i)  => i !== action.index
          )}
          break;
    default:
      return state
      break;
  }
  
}

var store1 =redux.createStore(reducer1);
store1.subscribe(()=>{ //hàm theo dõi 
  console.log(JSON.stringify(store1.getState()));
})
store1.dispatch({type:"CHANGE_EDIT_STATUS"})

store1.dispatch({
  type:"ADD_NEW",
  newItem:"Tai Nghe"
})


store1.dispatch({
  type:"DELETE",
  index:0
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
