import { FormField } from "./FormField";
import { Dropdown } from "./Dropdown";
import { genders } from "../utils/genders";
import { ErrorMessage } from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaType } from "../types/schemas/form-schema.type";
import { formSchema } from "../schemas/form-schema";

export const Form = (props: {
  onSubmitForm: (data: FormSchemaType) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const submitForm = (data: FormSchemaType) => {
    props.onSubmitForm(data);
    reset();
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
                register={register("name")}
              />

              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>

            <div className="flex flex-col gap grow">
              <FormField
                label="E-mail"
                type="email"
                id="email"
                register={register("email")}
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
                register={register("password")}
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
                register={register("passwordVerified")}
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
                type="text"
                id="phone"
                register={register("phone")}
              />

              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </div>

            <div className="flex flex-col gap grow basis-[190px]">
              <Dropdown
                label="Gênero"
                id="gender"
                options={genders}
                register={register("gender")}
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
