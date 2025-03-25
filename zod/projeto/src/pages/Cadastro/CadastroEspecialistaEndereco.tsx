import {
  Button,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
  UploadDescription,
  UploadIcon,
  UploadInput,
  UploadLabel,
  UploadTitulo,
  ErrorMessage,
} from "../../components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaCadastroEnderecoEspecialista = z.object({
  endereco: z.object({
    cep: z.string().min(9, "Informe um CEP válido"),
    rua: z.string().min(1, "Informe uma rua válida"),
    numero: z.coerce.number().min(1, "Informe um número válido"),
    bairro: z.string().min(1, "Informe um bairro válido"),
    localidade: z.string().min(1, "Informe uma localidade válida"),
  }),
});

type FormEnderecoEspecialista = z.infer<
  typeof schemaCadastroEnderecoEspecialista
>;

const CadastroEspecialistaEndereco = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormEnderecoEspecialista>({
    resolver: zodResolver(schemaCadastroEnderecoEspecialista),
  });

  function aoSubmeterFormulario(dados: FormEnderecoEspecialista) {
    console.log(dados);
  }

  return (
    <>
      <Titulo className="titulo">Para finalizar, só alguns detalhes!</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeterFormulario)}>
        <>
          <UploadTitulo>Sua foto</UploadTitulo>
          <UploadLabel htmlFor="campo-upload">
            <UploadIcon />
            <UploadDescription>Clique para enviar</UploadDescription>
            <UploadInput accept="image/*" id="campo-upload" type="file" />
          </UploadLabel>
        </>

        <Divisor />
        <Fieldset>
          <Label htmlFor="campo-cep">CEP</Label>
          <Input
            id="campo-cep"
            placeholder="Insira seu CEP"
            type="text"
            $error={!!errors?.endereco?.cep}
            {...register("endereco.cep")}
          />
          {errors?.endereco?.cep && (
            <ErrorMessage>{errors.endereco.cep.message}</ErrorMessage>
          )}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-rua">Rua</Label>
          <Input
            id="campo-rua"
            placeholder="Rua Agarikov"
            type="text"
            $error={!!errors?.endereco?.rua}
            {...register("endereco.rua")}
          />
          {errors?.endereco?.rua && (
            <ErrorMessage>{errors.endereco.rua.message}</ErrorMessage>
          )}
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="campo-numero-rua">Número</Label>
            <Input
              id="campo-numero-rua"
              placeholder="Ex: 1440"
              type="text"
              $error={!!errors?.endereco?.numero}
              {...register("endereco.numero")}
            />
            {errors?.endereco?.numero && (
              <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="campo-bairro">Bairro</Label>
            <Input
              id="campo-bairro"
              placeholder="Vila Mariana"
              type="text"
              $error={!!errors?.endereco?.bairro}
              {...register("endereco.bairro")}
            />
            {errors?.endereco?.bairro && (
              <ErrorMessage>{errors.endereco.bairro.message}</ErrorMessage>
            )}
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <Input
            id="campo-localidade"
            placeholder="São Paulo, SP"
            type="text"
            $error={!!errors?.endereco?.localidade}
            {...register("endereco.localidade")}
          />
          {errors?.endereco?.localidade && (
            <ErrorMessage>{errors.endereco.localidade.message}</ErrorMessage>
          )}
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaEndereco;
