import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);

        setData(response.data);
        setIsFetching(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [url]);

  return { data, isFetching };
}
