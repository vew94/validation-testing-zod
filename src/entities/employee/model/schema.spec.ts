import { describe, it, expect } from "vitest";
import { EmployeeSchema } from "./schema";

describe("EmployeeSchema", () => {
  describe("正常系", () => {
    it("すべてのフィールドが正しい場合、パースに成功する", () => {
      const validData = {
        id: "KIS12345",
        name: "田中太郎",
      };

      const result = EmployeeSchema.safeParse(validData);

      expect(result.success).toBe(true);
    });
  });
});
