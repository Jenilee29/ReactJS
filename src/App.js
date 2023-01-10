import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Greet02 from './component/Greet02';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/>    
      <Hello/>
      <Greet02 name="Rose" heroElem="Earth">
        <p>This is children props</p>
      </Greet02>  
      <Greet02 name="Jane" heroElem="Fire">
        <button>Action</button>  
      </Greet02>  
      <Greet02 name="Will" heroElem="Wind"/>
      <Welcome name="Will" heroElem="Wind"/>  
      <Message/> */}
      {/* <Counter/> */}
      <FunctionClick/>
      <ClassClick/>
    </div>
  );
}

export default App;
