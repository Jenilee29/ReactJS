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
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';    
import './appStyles.css';
// np folder named styles but a var
import styles from './appStyles.module.css';
import Form from './component/Form';
import LifecycleA from './component/LifecycleA';


function App() {
  return (
    <div className="App">
      <LifecycleA/>
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList/>       */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Welcome name="Will" heroElem="Wind"/>*/}
      {/* <Greet02 name="Will" heroElem="Wind"/> */}
      {/* <Greet02 name="Jane" heroElem="Fire">
        <button>Action</button>  
      </Greet02>*/}
      {/* <Greet02 name="Rose" heroElem="Earth">
        <p>This is children props</p>
      </Greet02>*/}
      {/* <Hello/> */}
      {/* <Welcome/>*/}
      {/* <Greet/> */}
    </div>
  );
}

export default App;
