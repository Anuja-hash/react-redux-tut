
import './App.css';
// 
let data={name:"BANNER"};

// 
function App(props) {
  // console.warn("props",props.loginHandler("hello Acction"));
  return (
    <div className="App">
     <h1>Redux</h1>
     <button onClick={()=>props.loginHandler("Hello redux")}>click</button>
     <button onClick={()=>props.signin("Anu")}>sign In</button>
    </div>
  );
}

export default App;
