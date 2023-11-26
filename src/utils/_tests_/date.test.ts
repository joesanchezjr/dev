import { getTimeAndConvertToTimeZone } from "../date";

describe("getTimeAndCovnertToTimeZone", () => {
  it("should return correct formatted string for America/Chicago timezone", () => {
    const date = new Date("2023-11-26T18:00:00.000Z");
    const result = getTimeAndConvertToTimeZone(date, "America/Chicago");
    expect(result).toEqual("12:00pm CST (GMT-6)");
  });

  it("should return correct formatted string for Europe/London timezone", () => {
    const date = new Date("2023-11-26T18:00:00.000Z");
    const result = getTimeAndConvertToTimeZone(date, "Europe/London");
    expect(result).toEqual("6:00pm GMT (GMT+0)");
  });

  it("should return correct formatted string for Asia/Tokyo timezone", () => {
    const date = new Date("2023-11-26T18:00:00.000Z");
    const result = getTimeAndConvertToTimeZone(date, "Asia/Tokyo");
    expect(result).toEqual("3:00am GMT+9 (GMT+9)");
  });
});
