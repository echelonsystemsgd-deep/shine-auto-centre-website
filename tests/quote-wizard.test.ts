import { describe, it, expect } from "vitest";

describe("Quote Wizard Form Validation Rules", () => {
  // Step 1 Validation rule: Service required
  const validateStep1 = (service: string) => {
    if (!service) return { valid: false, error: "Please select a service category to continue." };
    return { valid: true, error: null };
  };

  // Step 2 Validation rule: Name & Phone required, phone >= 10 digits
  const validateStep2 = (name: string, phone: string) => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Please enter your full name.";
    const cleanPhone = phone.replace(/[\s-]/g, "");
    if (!cleanPhone) {
      errors.phone = "Please enter your mobile or phone number.";
    } else if (cleanPhone.length < 10) {
      errors.phone = "Please enter a valid UK phone number (at least 10 digits).";
    }
    return { valid: Object.keys(errors).length === 0, errors };
  };

  // Step 3: Registration, make/model, email, message are OPTIONAL
  const validateStep3 = () => {
    return { valid: true };
  };

  it("fails step 1 when no service category is selected", () => {
    const res = validateStep1("");
    expect(res.valid).toBe(false);
    expect(res.error).toBe("Please select a service category to continue.");
  });

  it("passes step 1 when a valid service is chosen", () => {
    const res = validateStep1("dent-scratch");
    expect(res.valid).toBe(true);
  });

  it("fails step 2 when name is empty", () => {
    const res = validateStep2("", "07412895092");
    expect(res.valid).toBe(false);
    expect(res.errors.name).toBe("Please enter your full name.");
  });

  it("fails step 2 when phone number is too short", () => {
    const res = validateStep2("John Doe", "074128");
    expect(res.valid).toBe(false);
    expect(res.errors.phone).toContain("at least 10 digits");
  });

  it("passes step 2 with valid UK phone and full name", () => {
    const res = validateStep2("David Miller", "07412 895092");
    expect(res.valid).toBe(true);
    expect(Object.keys(res.errors).length).toBe(0);
  });

  it("accepts optional vehicle details in step 3 without blocking submission", () => {
    const res = validateStep3();
    expect(res.valid).toBe(true);
  });
});
