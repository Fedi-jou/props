
import './App.css';
import Comp from "./Profile/comp.js";
import picture from "./Images/img.jpg";

function App() {
  const inlinestyle = {
    color : "red",
    textAlign: "center",
    fontFamily: "Times New Roman",
    outlineStyle: "groove",
    outlineColor: "black"
  }
  const imgstyle = { 
      border: "1px solid #ddd",
      borderRadius: "4px" ,
      padding: "5px" ,
      width: "550px"
    }
    function handleName(name){
      alert(name)
         }

  return (
    <div style={inlinestyle} className="App">
      <Comp name="Fedi" bio="Go my code student" prof=" reactjs devoloper" handle={handleName} > <img style={imgstyle} src={picture} alt=""></img> </Comp>
      
    </div>
  );
}

export default App;
