import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, axiosInstance = axios) => {
  if (!url) {
    return;
  }
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setTrigger(Date.now());
    setState({ ...state, loading: true });
  };

  useEffect(() => {
    axiosInstance(url)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: true, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;