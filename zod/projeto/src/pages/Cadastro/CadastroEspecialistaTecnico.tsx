import {
  Button,
  ButtonContainer,
  Divisor,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
} from "../../components";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schemaCadastroEspecialista = z.object({
  crm: z
    .string()
    .min(13, "Informe o CRM corretamente")
    .max(13, "Máximo de 13 caracteres"),
  especialidades: z.array(
    z.object({
      especialidade: z
        .string()
        .min(5, "Mínimo de 5 caracteres")
        .max(100, "Máximo de 100 caracteres"),
      anoConclusao: z.coerce
        .number({
          errorMap: () => {
            return { message: "Insira um número" };
          },
        })
        .min(4, "Informe o ano de conclusão corretamente"),
      instituicaoEnsino: z
        .string()
        .min(3, "Mínimo de 3 caracteres")
        .max(100, "Máximo de 100 caracteres"),
    })
  ),
});

type FormEspecialista = z.infer<typeof schemaCadastroEspecialista>;

const CadastroEspecialistaTecnico = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormEspecialista>({
    resolver: zodResolver(schemaCadastroEspecialista),
    defaultValues: {
      crm: "",
    },
  });

  function aoSubmeter(dados: FormEspecialista) {
    console.log(dados);
  }

  const { fields, append } = useFieldArray({ control, name: "especialidades" });

  function adicionarEspecialidade() {
    append({
      especialidade: "",
      anoConclusao: 0,
      instituicaoEnsino: "",
    });
  }

  return (
    <>
      <Titulo className="titulo">Agora, seus dados técnicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label>CRM</Label>
          <Input
            id="campo-crm"
            type="text"
            placeholder="Insira seu número de registro"
            $error={!!errors.crm}
            {...register("crm")}
          />
          {errors.crm && <ErrorMessage>{errors.crm.message}</ErrorMessage>}
        </Fieldset>

        <Divisor />

        {fields.map((field, index) => (
          <div key={field.id}>
            <Fieldset>
              <Label>Especialidade</Label>
              <Input
                id="campo-especialidade"
                type="text"
                placeholder="Qual sua especialidade?"
                $error={!!errors.especialidades?.[index]?.especialidade}
                {...register(`especialidades.${index}.especialidade`)}
              />
              {errors.especialidades?.[index]?.especialidade && (
                <ErrorMessage>
                  {errors.especialidades?.[index]?.especialidade?.message}
                </ErrorMessage>
              )}
            </Fieldset>

            <FormContainer>
              <Fieldset>
                <Label>Ano de conclusão</Label>
                <Input
                  id="campo-ano-conclusao"
                  type="number"
                  placeholder="2005"
                  $error={!!errors.especialidades?.[index]?.anoConclusao}
                  {...register(`especialidades.${index}.anoConclusao`)}
                />
                {errors.especialidades?.[index]?.anoConclusao && (
                  <ErrorMessage>
                    {errors.especialidades?.[index]?.anoConclusao?.message}
                  </ErrorMessage>
                )}
              </Fieldset>

              <Fieldset>
                <Label>Instituição de ensino</Label>
                <Input
                  id="campo-instituicao-ensino"
                  type="text"
                  placeholder="USP"
                  $error={!!errors.especialidades?.[index]?.instituicaoEnsino}
                  {...register(`especialidades.${index}.instituicaoEnsino`)}
                />
                {errors.especialidades?.[index]?.instituicaoEnsino && (
                  <ErrorMessage>
                    {errors.especialidades?.[index]?.instituicaoEnsino?.message}
                  </ErrorMessage>
                )}
              </Fieldset>
            </FormContainer>
            <Divisor />
          </div>
        ))}

        <ButtonContainer>
          <Button
            type="button"
            onClick={adicionarEspecialidade}
            $variante="secundario"
          >
            Adicionar Especialidade
          </Button>
        </ButtonContainer>

        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaTecnico;
