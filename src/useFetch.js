import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const ApiCall = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const comingdata = await response.json();
      setData(comingdata);
      console.log(setData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    ApiCall(URL);
  }, []);
  return [data, loading, isError];
};
export default useFetch;
