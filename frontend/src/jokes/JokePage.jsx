// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { getJoke } from '../services/joke.service';

const JokePage = () => {
  const [setup, setSetup] = useState("this is a setup");
  const [punchline, setPunchline] = useState("this is a punchline");
  const [explanation, setExplanation] = useState("this is the explanation");
  const [pendingJoke, setPendingJoke] = useState(null);

  const [isRevealed, setIsRevealed] = useState(false)

  const handleUpdate = () => {
    if (!pendingJoke) return;

    setSetup(pendingJoke.setup);
    setPunchline(pendingJoke.punchline);
    setExplanation(pendingJoke.explanation);
    setPendingJoke(null);
  }

  const handleNext = async () => {
    // fetch the next joke from the service
    const next = await getJoke();

    // while revealed, queue the joke and flip back before swapping content
    if (isRevealed) {
      setPendingJoke(next);
      setIsRevealed(false);
    } else {
      setSetup(next.setup);
      setPunchline(next.punchline);
      setExplanation(next.explanation);
    }
  }

  const handleReveal = () => {
    setIsRevealed(prev => !prev);
  }


  return (
    <>
      <div className="jokes">
        <div className="card-container">
          <div
            className={`card ${isRevealed ? "card-active" : ""}`}
            onClick={handleReveal}
            onTransitionEnd={() => { if (!isRevealed && pendingJoke) handleUpdate() }}
          >

            <div className="front-card">
              <p>{setup}</p>
              <span className="reveal-hint">tap to reveal</span>
            </div>
            <div className="back-card">
              <p>{punchline}</p>
              <div className="explanation">
                <p>{explanation}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="next-btn" onClick={handleNext}>Next joke →</button>

      </div>
    </>
  )
}

export default JokePage
