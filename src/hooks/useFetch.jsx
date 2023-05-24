import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((res) => {
        setLoading(null);
        setData(res);
      })
      .catch((error) => {
        setLoading(null);
        setError(error);
      });
  }, [url]);

  return { data, error, loading };
};
export default useFetch;
