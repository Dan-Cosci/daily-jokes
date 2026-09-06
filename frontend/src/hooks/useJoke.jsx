import React from 'react';
import { useState } from 'react';

import { getJoke } from "../services/joke.service.js"

export default function useJoke() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const nextJoke = async () => {
    setLoading(true);
    setError(null)
    const joke = await getJoke();
    console.log(joke);
    setLoading(false);
    return joke
  }


  const isLoading = () => { return loading };

  return { error, loading, nextJoke, isLoading}
}
