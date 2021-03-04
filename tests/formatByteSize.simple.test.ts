/** @format */

import { formatByteSize } from "../src/formatByteSize";

describe("formatByteSize", () => {
  it("can handle some known values", () => {
    expect(formatByteSize(100)).toBe("100B");
    expect(formatByteSize(1024)).toBe("1KB");

    expect(formatByteSize(1024 * 1024 * 1024 * 1.2)).toBe("1.20GB");
  });

  it("can can handle kilo meaning 1000", () => {
    expect(formatByteSize(100, { kilo: 1000 })).toBe("100B");
    expect(formatByteSize(1024, { kilo: 1000 })).toBe("1.02KB");
  });
});
