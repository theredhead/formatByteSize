/** @format */

import {
  formatByteSize,
  alwaysTwoDecimals,
  stripPointZeroZero,
} from "../src/formatByteSize";

describe("formatByteSize", () => {
  it("can use alternate postprocessing", () => {
    expect(formatByteSize(100, { postProcessor: stripPointZeroZero })).toBe(
      "100B"
    );
    expect(formatByteSize(1024, { postProcessor: alwaysTwoDecimals })).toBe(
      "1.00KB"
    );
  });
});
