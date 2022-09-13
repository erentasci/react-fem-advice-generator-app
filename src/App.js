import { useState } from 'react';
import './App.css';

function App() {

  const URL = "https://api.adviceslip.com/advice";
 
  const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action");
  const [adviceId, setAdviceId] = useState("13");


  const getAdvice = async () => {

      const response = await fetch(URL);
      const data = await response.json()


      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);

  }

  const runFetch = () => {

    getAdvice();

  }



  return (

    <div className="App">

      <div className='container'>

            <div className='box'>
              
                <small>ADVICE ${adviceId}</small>

                <p>{advice}</p>

                <svg className='svgMobile 'width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
                
                <button onClick={runFetch}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
                </button>

            </div>    

      </div>

    </div>

  );
}

export default App;
