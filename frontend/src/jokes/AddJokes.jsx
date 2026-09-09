import { useState } from 'react';
import useJoke from '../hooks/useJoke';
import toast from 'react-hot-toast';

const initialState = {
  setup: "",
  punchline: "",
  explanation: "",
};

function AddJokes() {
  const [form, setForm] = useState(initialState);

  const { addJoke } = useJoke()

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await toast.promise(
      addJoke(form),
      {
        loading: "Adding Joke...",
        success: "Joke added successfully!",
        error: "Joke did not add",
      }
    );

    setForm(initialState);
  };

  return (
    <div className="add-joke">
      <h2 className="add-joke__title">Add a joke</h2>

      <form className="add-joke__form" onSubmit={handleSubmit}>
        <div className="add-joke__form__inputs">
          <fieldset>
            <legend>Setup</legend>
            <input
              type="text"
              name="setup"
              value={form.setup}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <legend>Punchline</legend>
            <input
              type="text"
              name="punchline"
              value={form.punchline}
              onChange={handleChange}
            />
          </fieldset>

          <fieldset>
            <legend>Explanation</legend>
            <input
              type="text"
              name="explanation"
              value={form.explanation}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <div className="add-joke__form__submit">
          <button type="submit">Add Joke</button>
        </div>
      </form>
    </div>
  );
}

export default AddJokes;
