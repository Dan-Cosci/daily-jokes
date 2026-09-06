// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

import useJoke from '../hooks/useJoke';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { getJoke } from '../services/joke.service';

const JokePage = () => {
  const [joke, setJoke] = useState({
    setup: "hello",
    punchline: "hello",
    explanation: "helloe"
  });
  const [pendingJoke, setPendingJoke] = useState(null);

  const [isRevealed, setIsRevealed] = useState(false)

  const { nextJoke, isLoading } = useJoke();

  const handleUpdate = () => {
    if (!pendingJoke) return;

    setJoke(pendingJoke);
    setPendingJoke(null);
  }

  const handleNext = async () => {
    // fetch the next joke from the service

    setIsRevealed(false);

    const next = await nextJoke();

    // while revealed, queue the joke and flip back before swapping content
    if (isRevealed) {
      setPendingJoke(next);
    } else {
      setJoke(next)
    }
  }

  const handleReveal = () => {
    setIsRevealed(prev => !prev);
  }
  useEffect(() => {
    let active = true;
    nextJoke().then((j) => {
      if (active && j) setJoke(j);
    })

    return () => {
      active = false;
    };
  }, []);

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

              {!isLoading() ?
                <>
                  <p>{joke.setup}</p>
                  <span className="reveal-hint">tap to reveal</span>
                </>
                :
                <Loading />
              }

            </div>
            <div className="back-card">
              <p>{joke.punchline}</p>
              <div className="explanation">
                <p>{joke.explanation}</p>
              </div>
            </div>
          </div>
        </div>
        <button className="next-btn" onClick={handleNext}>Next joke</button>

      </div>
    </>
  )
}

export default JokePage
