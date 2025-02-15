import { useForm } from "react-hook-form"; //importa o useForm
import { Button, Label, Fieldset, Input, Form, Titulo } from "../../components";
import { ErrorMessage } from "../../components";

interface FormProps {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  senhaVerificada: string;
}

const CadastroPessoal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // formState para lidar com erros de validação de inputs
  } = useForm<FormProps>();

  const aoSubmeter = (dados: FormProps) => {
    console.log(dados);
  };

  function validarEmail(valor: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@alura\.com\.br$/;

    if (!regex.test(valor)) {
      console.error("formato de e-mail inválido.");
      return false;
    }

    return true;
  }

  return (
    <>
      <Titulo>Insira alguns dados básicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label htmlFor="campo-nome">Nome</Label>
          <Input
            id="campo-nome"
            placeholder="Digite seu nome completo"
            type="text"
            {...register("nome", {
              required: "Esse campo é obrigatório", // personalizando mensagens de erro diferentes do mesmo input
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres",
              },
            })}
          />

          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-email">E-mail</Label>
          <Input
            id="campo-email"
            placeholder="Insira seu endereço de email"
            type="email"
            {...register("email", {
              required: "Esse campo é obrigatório",
              validate: validarEmail,
            })}
          />

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label>Telefone</Label>
          <Input
            id="campo-telefone"
            type="text"
            placeholder="Ex: (DDD) XXXXX-XXXX"
            {...register("telefone", {
              required: "Esse campo é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                message: "Formato incorreto para telefone",
              },
            })}
          />

          {errors.telefone && (
            <ErrorMessage>{errors.telefone.message}</ErrorMessage>
          )}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha">Crie uma senha</Label>
          <Input
            id="campo-senha"
            placeholder="Crie uma senha"
            type="password"
            {...register("senha", {
              required: "Esse campo é obrigatório",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres",
              },
            })}
          />

          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </Fieldset>

        <Fieldset>
          <Label htmlFor="campo-senha-confirmacao">Repita a senha</Label>
          <Input
            id="campo-senha-confirmacao"
            placeholder="Repita a senha anterior"
            type="password"
            {...register("senhaVerificada", { required: true })}
          />
        </Fieldset>

        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroPessoal;
