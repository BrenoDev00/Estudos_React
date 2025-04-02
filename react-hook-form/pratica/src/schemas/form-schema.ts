import { z } from "zod";

export const formSchema = z
  .object({
    name: z
      .string()
      .min(3, "Mínimo 3 caracteres")
      .max(64, "Máximo 64 caracteres"),
    email: z
      .string()
      .regex(/^[a-zA-Z0-9._%+-]+@mail\.com$/, "Insira um formato válido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
    passwordVerified: z.string().min(6, "Repita a senha"),
    phone: z
      .string()
      .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Insira um formato válido"),
    gender: z.string(),
  })
  .refine((field) => field.password === field.passwordVerified, {
    message: "Os campos não coincidem",
    path: ["passwordVerified"],
  })
  .refine(
    (field) =>
      field.gender === "masculino" ||
      field.gender === "feminino" ||
      field.gender === "outro",
    {
      message: "Escolha uma opção",
      path: ["gender"],
    }
  );
