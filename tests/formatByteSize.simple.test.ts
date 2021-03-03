/** @format */

/// <reference path="../node_modules/@types/jasmine/index.d.ts" />

import { formatByteSize } from "../src/formatByteSize";

describe("formatByteSize", () => {
  it("can handle some known values", () => {
    expect(formatByteSize(100)).toBe("100B");
    expect(formatByteSize(1024)).toBe("1KB");
  });
});
