/** @format */

import { formatByteSize } from "../src/formatByteSize";

describe("formatByteSize", () => {
  it("can handle some known values", () => {
    expect(formatByteSize(100)).toBe("100B");
    expect(formatByteSize(1024)).toBe("1KB");

    expect(formatByteSize(1024 * 1024 * 1024 * 1.2)).toBe("1.20GB");
  });
});
