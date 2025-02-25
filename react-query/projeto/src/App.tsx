import { useFetch } from "./hooks/useFetch";

type RepositoryType = {
  full_name: string;
  description: string;
};

function App() {
  const { data, isFetching } = useFetch<RepositoryType[]>(
    "https://api.github.com/users/BrenoDev00/repos"
  );

  return (
    <>
      {isFetching && <p>Carregando...</p>}

      {data?.map((item) => {
        return (
          <li key={item.full_name}>
            <strong>{item.full_name}</strong>
            <p>{item.description}</p>
          </li>
        );
      })}
    </>
  );
}

export default App;
