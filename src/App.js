import logo from './logo.svg';
import './App.css';
import data from "./data"
import { useState } from 'react';
import Question from './Question';

function App() {
  
  const[questions, setQuestions] = useState(data);
  
  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about login</h3>
        <section className='info'>
          {
            questions.map((que) => {
              return <Question key={que.id} question={que}/>;
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
