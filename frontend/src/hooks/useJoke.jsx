import { useState } from 'react';

import { createJoke, getJoke } from "../services/joke.service.js"

export default function useJoke() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const nextJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const joke = await getJoke();
      console.log(joke);
      return joke;
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  const addJoke = async (joke) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createJoke(joke);

      console.log(res);
      return res;
    }
    catch (err) {
      console.log(err);
      setError(err);
      throw err;
    }
    finally {
      setLoading(false);
    }
  }


  const isLoading = () => { return loading };

  return { error, loading, nextJoke, isLoading, addJoke }
}
