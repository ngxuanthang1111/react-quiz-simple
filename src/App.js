import React from 'react';
// import Quiz from "./components/Divisive/Quiz";
import Quiz from './components/Quiz'
import dataQA from './dataQA'

function App() {
  return (
    <div className="App">
        <Quiz questions={dataQA}/>
        {/*<Quiz questions={dataQA}/>*/}
    </div>
  );
}

export default App;
