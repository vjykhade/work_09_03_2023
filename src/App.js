import './App.css';
//import NameList from './components/NameList';
//import UserGreeting from './components/UserGreeting';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
//import ParentComponent from './components/ParentComponent';
//import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Greet name="IronMan" heroName = "Robert Jr."/>
      <Greet name="Ant Man"/>
       <Welcome name="Bruce" heroName ="BatMan"/>
      <Welcome />
      <Welcome />
      <Hello />
      <Message />
      <Counter /> 
      <FunctionClick />
      <ClassClick />
      <EventBind />
    <ParentComponent />
    <UserGreeting />
    <NameList />
    <Stylesheets primary={true} />*/}
    <Inline />
    </div>
  );
}

export default App;
