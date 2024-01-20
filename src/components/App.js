
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState();

  return (
    <div>
        {
          name ? <p>Hello {name}!</p> : <p>Enter your name:</p>
        }
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        
    </div>
  );
}

export default App
