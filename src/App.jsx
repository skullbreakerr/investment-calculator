import { useState } from 'react';
import Header from './components/Header.jsx';
import Result from './components/Result.jsx';
import UserInput from './components/UserInput.jsx';

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 5,
};

function App() {

  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  function handleChange(identifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      } 
    })
  }
  const isInputValid = userInput.duration >0;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onHandleChange={handleChange} />
      {(isInputValid) ?<Result userInput={userInput}/>:<p className='center'>Duration Cannot be null or Negative </p>}
    </>
  )
}

export default App
