// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const JokePage = () => {
  const [setup, setSetup] = useState("this is a setup");
  const [punchline, setPunchline] = useState("this is a punchline");
  const [explanation, setExplanation] = useState("this is the explanation");

  const emojis = [ "🎉","🥳","🤨"]

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
<<<<<<< HEAD
  
  
=======


>>>>>>> 8bb069a (Frontend: redesign)
  return (
    <>

    </>
  )
}

export default JokePage
