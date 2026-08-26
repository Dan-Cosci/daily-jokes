// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const JokePage = () => {
  const [setup, setSetup] = useState("this is a setup");
  const [punchline, setPunchline] = useState("this is a punchline");
  const [explanation, setExplanation] = useState("this is the explanation");

  const handleUpdate = async () => {
    // call data base service returns data
    let change = {
      setup: "this is another setup",
      punchline: "this is another punchline",
      explanation: "this is another explanation"
    }
    
    //puts the data in ther respective usestates
    setSetup(change.setup);
    setPunchline(change.punchline);
    setExplanation(change.explanation);

  }
  
  
  return (
    <div className="jokes">
      <div className="card">
        <div className="front-card">
          <p>{setup}</p>
        </div>

        <div className="back-card">
          <p>{punchline}</p>
          <div className="explanation">
            <p>{explanation}</p>
          </div>
          <div className="btn-container">
            <button className="random" onClick={handleUpdate}>Next Joke</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default JokePage