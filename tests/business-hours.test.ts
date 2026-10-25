import { describe, it, expect } from "vitest";
import { getGarageStatus } from "../lib/business";

describe("Business Operating Hours & Status Indicator (Europe/London)", () => {
  it("reports OPEN during normal working hours (e.g. Wednesday 11:30 AM)", () => {
    // 2026-10-21 is a Wednesday. 11:30 UTC is 12:30 BST or 11:30 GMT
    const wednesdayMidday = new Date("2026-10-21T11:30:00Z");
    const status = getGarageStatus(wednesdayMidday);
    expect(status.isOpen).toBe(true);
    expect(status.statusText).toBe("Open Now");
    expect(status.statusBadge).toContain("Open today");
  });

  it("reports CLOSED on Sunday", () => {
    // 2026-10-25 is a Sunday
    const sundayMorning = new Date("2026-10-25T11:00:00Z");
    const status = getGarageStatus(sundayMorning);
    expect(status.isOpen).toBe(false);
    expect(status.statusText).toContain("Closed Today");
    expect(status.statusBadge).toContain("Opens Monday at 9:00am");
  });

  it("reports CLOSED before 9am on a weekday", () => {
    // 2026-10-22 is a Thursday at 07:00 UTC
    const thursdayEarly = new Date("2026-10-22T07:00:00Z");
    const status = getGarageStatus(thursdayEarly);
    expect(status.isOpen).toBe(false);
    expect(status.statusBadge).toContain("Opens today at 9:00am");
  });

  it("reports CLOSED after 6pm on a weekday", () => {
    // 2026-10-22 is a Thursday at 19:30 UTC
    const thursdayEvening = new Date("2026-10-22T19:30:00Z");
    const status = getGarageStatus(thursdayEvening);
    expect(status.isOpen).toBe(false);
    expect(status.statusBadge).toContain("Opens tomorrow at 9:00am");
  });

  it("reports CLOSED on Saturday evening and opens Monday 9am", () => {
    // 2026-10-24 is a Saturday at 20:00 UTC
    const saturdayEvening = new Date("2026-10-24T20:00:00Z");
    const status = getGarageStatus(saturdayEvening);
    expect(status.isOpen).toBe(false);
    expect(status.statusBadge).toContain("Opens Monday at 9:00am");
  });
});
