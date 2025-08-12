import { useReducer } from "react";

  const initialState = {count : 0};

  function reducer(state, action){
    switch(action.type){
      case "increment":
        return {count : state.count + 1 };
      case "decrement":
        return {count : state.count - 1};
      case "reset":
        return initialState;
      default :
      return state;
    }
  }

const App = () =>{
  const [state, dispatch] = useReducer(reducer, initialState);
  return(
    <div style={{marginTop:"70px",display: "flex", flexDirection: "column", justifyContent: "cenetr", alignItems: "center"}}>
      <h1>Count:{state.count}</h1>
      <div>
        <button style={{margin:"15px"}} onClick={() => dispatch({type : "increment"})}>
          <h1>+</h1>
        </button>
        <button style={{margin:"15px"}} onClick={() => dispatch({type : "decrement"})}>
          <h1>-</h1>
        </button>
      </div>
      <div>
        <button style={{margin:"15px"}} onClick={() => dispatch({type : "reset"})}>
        <h2>Reset</h2>
      </button>
      </div>
    </div>
  )
}

export default App