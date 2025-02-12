import { FormField } from "./FormField";
import { Dropdown } from "./Dropdown";
import { genders } from "../utils/genders";
import { FormFieldsInterface } from "../types/form-fields.type";
import { ErrorMessage } from "./ErrorMessage";
import { useForm } from "react-hook-form";

export const Form = (props: {
  onSubmitForm: (data: FormFieldsInterface) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFieldsInterface>();

  const submitForm = (data: FormFieldsInterface) => {
    props.onSubmitForm(data);
  };

  return (
    <section className="flex justify-center">
      <form
        id="form"
        className="border border-white rounded p-4 mt-20 flex flex-col gap-4 w-[800px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="text-2xl text-slate-200 text-center">
          Formulário de cadastro
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField
                label="Nome"
                type="text"
                id="name"
                register={register("name", { required: true, minLength: 3 })}
              />

              {errors.name && <ErrorMessage message="mínimo 3 caracteres" />}
            </div>

            <div className="flex flex-col gap grow">
              <FormField
                label="E-mail"
                type="email"
                id="email"
                register={register("email", { required: true })}
              />

              {errors.email && (
                <ErrorMessage message="informe um e-mail válido" />
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField
                label="Telefone"
                type="tel"
                id="phone"
                register={register("phone", { required: true })}
              />

              {errors.phone && (
                <ErrorMessage message="informe um telefone válido" />
              )}
            </div>

            <div className="flex flex-col gap grow">
              <FormField
                label="Senha"
                type="password"
                id="password"
                register={register("password", { required: true })}
              />

              {errors.password && <ErrorMessage message="informe a senha" />}
            </div>
          </div>

          <div className="self-center w-[350px] text-center">
            <Dropdown
              label="Gênero"
              id="gender"
              options={genders}
              register={register("gender", { required: true })}
            />

            {errors.gender && (
              <ErrorMessage message="escolha uma opção de gênero" />
            )}
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
