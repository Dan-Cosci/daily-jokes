import React from 'react';
import { useState } from 'react';

const initialState = {
  setup: "",
  punchline: "",
  explanation: "",
};

function AddJokes() {
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (

      <div className="add-joke">
        <h2 className="add-joke__title">Add a joke</h2>

        <form className='add-joke__form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="setup"
            value={form.setup}
            onChange={(e) => { setForm( (prev)=>({...prev , [e.target.name]: e.target.value }))}}
          />
          <input
            type="text"
            name="punchline"
            value={form.punchline}
            onChange={(e) => { setForm( (prev)=>({...prev , [e.target.name]: e.target.value }))}}
          /><input
            type="text"
            name="explanation"
            value={form.explanation}
            onChange={(e) => { setForm( (prev)=>({...prev , [e.target.name]: e.target.value }))}}
          />

          <button type="submit">Add Joke</button>
        </form>
      </div>

  );
}

export default AddJokes;
