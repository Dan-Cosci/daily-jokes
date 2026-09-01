// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const JokePage = () => {
  const [setup, setSetup] = useState("this is a setup");
  const [punchline, setPunchline] = useState("this is a punchline");
  const [explanation, setExplanation] = useState("this is the explanation");

  const [cardHover, setCardHover] = useState(false)

  const emojis = [ "🎉","🥳","🤨"]

  const handleUpdate = async () => {
    // call data base service returns data
    let change = {
      setup: "this is another setup",
      punchline: "this is another punchline",
      explanation: "this is another explanation"
    }

    //puts the data in ther respective usestates
    cardHover ? setCardHover(prev=>!prev) : "" ;
    setSetup(change.setup);
    setPunchline(change.punchline);
    setExplanation(change.explanation);

  }

  const handleReveal = () => {
    setCardHover(prev=>!prev);
  }
  

  return (
    <>
      <div className="jokes">
        <div className="card-container">
          <div className={`card ${cardHover ? "card-active" : "" }`} onClick={handleReveal}>
            <div className="front-card">
              <p>{setup}</p>
            </div>
            <div className="back-card">
              <p>{punchline}</p>
              <div className="explanation">
                <p>{explanation}</p>
              </div>
            </div>
          </div>
          <button onClick={handleUpdate}>nextJoke</button>

        </div>
      </div>
    </>
  )
}

export default JokePage
