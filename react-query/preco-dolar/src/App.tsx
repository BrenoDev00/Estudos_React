import { useState } from "react";
import { FormEvent } from "react";
import { useGetDollar } from "./hooks/dollar";
import { usePostData } from "./hooks/usePostData";

function App() {
  const { data, isLoading, isError } = useGetDollar();
  const { postData } = usePostData();

  const [nameField, setNameField] = useState<string>("");
  const [ageField, setAgeField] = useState<string>("");

  async function submitForm(event: FormEvent) {
    event.preventDefault();

    const data = {
      nameField,
      ageField,
    };

    await postData(data);

    setNameField("");
    setAgeField("");
  }

  return (
    <>
      {isLoading && <p>Carregando...</p>}

      {isError && <p>Erro inesperado. Tente novamente</p>}

      <main
        style={{
          height: "100dvh",
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column",
          gap: "50px",
          color: "white",
        }}
      >
        <section
          style={{
            border: "1px, solid, white",
            padding: "20px",
            marginTop: "-200px",
          }}
        >
          <h1 style={{ fontSize: "23px", textAlign: "center" }}>
            Cotação do dólar
          </h1>

          <div>
            <h2 style={{ fontSize: "20px" }}>Preço do dólar em reais</h2>

            <div>
              <p style={{ fontSize: "18px" }}>
                Preço Máximo: R$ {Number(data?.high).toFixed(2)}
              </p>

              <p style={{ fontSize: "18px" }}>
                Preço Mínimo: R$ {Number(data?.low).toFixed(2)}
              </p>
            </div>
          </div>
        </section>

        <section>
          <form
            onSubmit={(event) => submitForm(event)}
            method="post"
            style={{
              border: "1px solid white",
              padding: "15px",
              display: "flex",
              flexFlow: "column",
              gap: "10px",
            }}
          >
            <h2>Form de dados</h2>

            <div>
              <div>
                <label htmlFor="nome">Nome </label>
              </div>

              <input
                onInput={(event) => setNameField(event.currentTarget.value)}
                value={nameField}
                type="text"
                id="nome"
                name="nome"
                required
                style={{ padding: "5px", fontSize: "18px" }}
              />
            </div>

            <div>
              <div>
                <label htmlFor="idade">Idade </label>
              </div>

              <input
                onInput={(event) => setAgeField(event.currentTarget.value)}
                value={ageField}
                type="number"
                id="idade"
                name="idade"
                required
                style={{ padding: "5px", fontSize: "18px" }}
              />
            </div>

            <button type="submit">enviar dados</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
