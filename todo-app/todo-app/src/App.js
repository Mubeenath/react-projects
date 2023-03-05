
// import react from 'react';
import './App.css';
import Form from './components/form'
// import Output from './components/output'

function App() {
  const onFormSub = (todo) => {
    console.log(todo);
  }
 
 
  return (
    <div className="App">
    
      <Form getData ={onFormSub} />
      

      
    </div>
  );
}

export default App;


// const [count, setCount] = useState(0)
 
  // let count = 18
  // const addCount =() => {
    // count = count +1
    // setCount (count +1)
    // console.log(count)}


  /* <h2>the count is {count}</h2>  */
  /* <button onClick={addCount}>add count</button> */
// countNo={count}
