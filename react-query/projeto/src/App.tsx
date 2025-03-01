import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type RepositoryType = {
  full_name: string;
  description: string;
};

function App() {
  const { data, isFetching } = useQuery<RepositoryType[]>({
    queryKey: ["repos"],

    queryFn: async () => {
      const response = await axios.get(
        "https://api.github.com/users/BrenoDev00/repos"
      );

      return response.data;
    },
  });

  return (
    <>
      {isFetching && <p>Carregando...</p>}

      <ul>
        {data?.map((item: RepositoryType) => {
          return (
            <li key={item.full_name}>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
