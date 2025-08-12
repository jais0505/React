import { useReducer } from "react";

const initialState = { name: '', age: 0, rollno: '' };

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value
  };
}

const App2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      field: e.target.name,   
      value: e.target.value   
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <input
          type="text"
          name="name"
          value={state.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="number"
          name="age"
          value={state.age}
          placeholder="Enter age"
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="text"
          name="rollno"
          value={state.rollno}
          placeholder="Enter roll no"
          onChange={handleChange}
        />
        <br /><br />
        <input type="submit" />
      </div>

      <br /><br /><br />

      <div>
        <div>Name: {state.name}</div>
        <div>Age: {state.age}</div>
        <div>RollNo: {state.rollno}</div>
      </div>
    </div>
  );
};

export default App2;
