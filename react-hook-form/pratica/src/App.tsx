import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { FormFieldsInterface } from "./types/form-fields.type";

function App() {
  const [onRegisteredUser, setOnRegisteredUser] = useState<
    FormFieldsInterface[]
  >([]);

  const registerUser = (user: FormFieldsInterface) => {
    const newUsers = [...onRegisteredUser, user];

    setOnRegisteredUser(newUsers);
  };

  return (
    <div className="bg-slate-800 h-dvh">
      <main className="bg-slate-800">
        <Form
          onSubmitForm={(user) => {
            registerUser(user);
          }}
        />

        {onRegisteredUser.length > 0 && (
          <section className="m-auto max-w-[1200px] py-4 px-2 flex flex-col items-center gap-4 justify-center mt-20">
            <h2 className="text-slate-200 text-2xl">Usuários cadastrados</h2>

            <div className="flex gap-6 mt-4 flex-wrap ">
              {onRegisteredUser.map((user) => {
                return <Card {...user} />;
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
