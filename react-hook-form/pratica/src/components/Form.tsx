import { FormField } from "./FormField";
import { Dropdown } from "./Dropdown";
import { genders } from "../utils/genders";
import { ErrorMessage } from "./ErrorMessage";

export const Form = () => {
  return (
    <section className="flex justify-center">
      <form className="border border-white rounded p-4 mt-20 flex flex-col gap-4 w-[800px]">
        <h1 className="text-2xl text-slate-200 text-center">
          Formulário de cadastro
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField label="Nome" type="text" id="name" />
              {/* <ErrorMessage message="Insira um nome válido" /> */}
            </div>

            <div className="flex flex-col gap grow">
              <FormField label="E-mail" type="email" id="email" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField label="Telefone" type="tel" id="phone" />
            </div>

            <div className="flex flex-col gap grow">
              <FormField label="Senha" type="password" id="password" />
            </div>
          </div>

          <div className="self-center w-[350px] text-center">
            <Dropdown label="Gênero" id="gender" options={genders} />
          </div>
        </div>

        <button
          type="submit"
          className="bg-slate-500 text-white rounded-md py-1 px-6 cursor-pointer self-center"
        >
          Cadastrar
        </button>
      </form>
    </section>
  );
};
