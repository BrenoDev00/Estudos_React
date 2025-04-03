import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ListDollarInterface } from "../types/dollar.type";

export function useGetDollar() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dollar"],
    queryFn: async () => {
      const response = await axios.get<ListDollarInterface>(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL"
      );
      return response.data.USDBRL;
    },
  });

  return { data, isLoading, isError };
}
