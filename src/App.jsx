import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // adding a plus changes a string to a number
      }
    })
  }


  return <>
    <Header></Header>
    <UserInput onChange={handleChange} userInput={userInput} ></UserInput>
    {!inputIsValid && <p class="center">Please enter a duration MORE than 0</p>}
    { inputIsValid && <Results input={userInput}></Results>}
  </>
}

export default App
