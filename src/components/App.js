
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState();

  function handleInput(e){
    setName(e.target.value);
  }

  return (
    <div>
      <form>
        <p>Enter your name:</p>
        <input type="text" onChange={handleInput} />
      </form>

      { name!=""? <p>Hello {name}</p>  : ""   }

    </div>
  );
}

export default App
