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
    watch,
    reset,
  } = useForm<FormFieldsInterface>();

  const submitForm = (data: FormFieldsInterface) => {
    props.onSubmitForm(data);
    reset();
  };

  const passwordField = watch("password");

  const validatePassword = {
    required: (value: string) => !!value || "Campo obrigatório",
    minLength: (value: string) => value.length >= 6 || "Mínimo 6 caracteres",
    samePassword: (value: string) =>
      value === passwordField || "As senhas não coincidem",
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
                register={register("name", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 caracteres",
                  },
                })}
              />

              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>

            <div className="flex flex-col gap grow">
              <FormField
                label="E-mail"
                type="email"
                id="email"
                register={register("email", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@mail\.com$/,
                    message: "Insira um formato de e-mail válido",
                  },
                })}
              />

              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField
                label="Senha"
                type="password"
                id="password"
                register={register("password", {
                  required: "Campo obrigatório",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                })}
              />

              {errors.password && (
                <ErrorMessage message={errors.password.message} />
              )}
            </div>

            <div className="flex flex-col gap grow">
              <FormField
                label="Senha Verificada"
                type="password"
                id="password-verified"
                register={register("passwordVerified", {
                  required: "Campo obrigatório",
                  validate: validatePassword,
                })}
              />

              {errors.passwordVerified && (
                <ErrorMessage message={errors.passwordVerified.message} />
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap grow">
              <FormField
                label="Telefone"
                type="tel"
                id="phone"
                register={register("phone", { required: "Campo obrigatório" })}
              />

              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </div>

            <div className="flex flex-col gap grow basis-[190px]">
              <Dropdown
                label="Gênero"
                id="gender"
                options={genders}
                register={register("gender", { required: "Campo obrigatório" })}
              />

              {errors.gender && (
                <ErrorMessage message={errors.gender.message} />
              )}
            </div>
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
