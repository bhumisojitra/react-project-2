import { useState } from 'react';
import './App.css'
import Counter from './component/counter/counter';

function App() {

  const [count, setCount] = useState(0);

  const Inc = () => {
    console.log("Inc");
    setCount(count + 1);
  }

  const Dec = () => {
      console.log("Dec");

      if (count > 0) {
          setCount(count - 1);
      }
  }

  const Rec = () => {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} inc={Inc} dec={Dec} res={Rec}/>
    </>
  )
}

export default App
