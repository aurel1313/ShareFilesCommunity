"use server";
import { z } from "zod";
const schema = z.object({
  email: z.string().min(1, "ne peut pas etre nul"),
  password: z.string().min(1, "ne peut pas etre nul"),
});
export default async function createUser(_prevState: any, params: FormData) {
  const validation = schema.safeParse({
    email: params.get("email"),
    password: params.get("password"),
  });

  // Return early if the form data is invalid
  if (!validation.success) {
    return {
      errors: validation.error.issues,
    };
  }
}
