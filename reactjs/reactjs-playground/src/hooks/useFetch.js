import { useEffect, useState } from "react";

function useFetch(fetchURL) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  async function fetchData() {
    console.log("Inside useEffect, after first render/ onMount")

    try {
      setLoading(true);
      const response = await fetch(fetchURL);
      console.log("Response: ", response)
      if (response.ok === false) {
        throw new Error("Failed to load posts"); // Custom Error
      }
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { loading, error, data };
}

export default useFetch;