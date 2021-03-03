/** @format */

import {
  formatByteSize,
  alwaysTwoDecimals,
  stripPointZeroZero,
} from "../src/formatByteSize";

describe("formatByteSize", () => {
  it("can use alternate postprocessing", () => {
    expect(formatByteSize(100, 1024, stripPointZeroZero)).toBe("100B");
    expect(formatByteSize(1024, 1024, alwaysTwoDecimals)).toBe("1.00KB");
  });
});
