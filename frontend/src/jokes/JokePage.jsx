// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const JokePage = () => {
  const [setup, setSetup] = useState("this is a setup");
  const [punchline, setPunchline] = useState("this is a punchline");
  const [explanation, setExplanation] = useState("this is the explanation");
  const [pendingJoke, setPendingJoke] = useState(null);

  const [cardHover, setCardHover] = useState(false)

  const emojis = [ "🎉","🥳","🤨"]

  const handleUpdate = async () => {

    setSetup(pendingJoke.setup);
    setPunchline(pendingJoke.punchline);
    setExplanation(pendingJoke.explanation);
    setPendingJoke(null);
  }

  const handleNext = async () => {
    // call data base service returns data
    let change = {
      setup: "this is another setup",
      punchline: "this is another punchline",
      explanation: "this is another explanation"
    }

    //puts the data in ther respective usestates
    if (cardHover) {
      setPendingJoke(change);
      handleReveal()
    } else {
      setSetup(change.setup);
      setPunchline(change.punchline);
      setExplanation(change.explanation);
    }
  }

  const handleReveal = () => {
    setCardHover(prev=>!prev);
  }


  return (
    <>
      <div className="jokes">
        <div className="card-container">
          <div
            className={`card ${cardHover ? "card-active" : ""}`}
            onClick={handleReveal}
            onTransitionEnd={() => { if(!cardHover && pendingJoke) handleUpdate()}}
          >

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
          <button onClick={handleNext}>nextJoke</button>

        </div>
      </div>
    </>
  )
}

export default JokePage
