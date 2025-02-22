import { useEffect, useState } from "react";
import axios from "axios";

type DollarType = {
  high: number;
  low: number;
};

export function useDollar() {
  const [dollarPrice, setDollarPrice] = useState<DollarType>();

  useEffect(() => {
    async function getDollar() {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL"
        );
        setDollarPrice(response.data.USDBRL);
      } catch (error) {
        console.error(error);
      }
    }

    getDollar();
  }, []);

  return { dollarPrice };
}
