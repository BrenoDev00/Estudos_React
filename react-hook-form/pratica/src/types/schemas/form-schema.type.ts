import { z } from "zod";
import { formSchema } from "../../schemas/form-schema";

export type FormSchemaType = z.infer<typeof formSchema>;
