import { useDollar } from "./hooks/useDollar";

function App() {
  const { dollarPrice } = useDollar();

  return (
    <>
      <main
        style={{
          height: "100dvh",
          width: "100vw",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
                Preço Máximo: R$ {Number(dollarPrice?.high).toFixed(2)}
              </p>

              <p style={{ fontSize: "18px" }}>
                Preço Mínimo: R$ {Number(dollarPrice?.low).toFixed(2)}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
