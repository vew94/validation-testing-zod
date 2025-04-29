import z from "zod";

/**
 * @ignore
 */
export const EmployeeSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  age: z.number().int().positive(),
  position: z.string().min(1),
  department: z.string().min(1),
});

/**
 * Type definition for Employee
 *
 * @example
 * ```ts
 * const employee: Employee = {
 *  id: "ABC99999",
 *  name: "John Doe",
 *  age: 30,
 *  position: "Software Engineer",
 *  department: "Engineering",
 * }
 * ```
 */
export type Employee = z.infer<typeof EmployeeSchema>;
