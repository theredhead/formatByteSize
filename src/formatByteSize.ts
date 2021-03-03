/** @format */

export type FormatByteSizePostProcessorFunc = (
  num: number,
  unit: string
) => string;

export const stripPointZeroZero: FormatByteSizePostProcessorFunc = (
  num,
  unit
) => [num.toFixed(2).replace(/\.00$/, ""), unit].join();

export const alwaysTwoDecimals: FormatByteSizePostProcessorFunc = (num, unit) =>
  [num.toFixed(2), unit].join();

/**
 * Formats a given number of bytes in a human readable format
 *
 * @param numberOfBytes: number
 * @param kilo: number
 */
export const formatByteSize = (
  numberOfBytes: number,
  kilo: 1000 | 1024 = 1024,
  postProcess: FormatByteSizePostProcessorFunc = stripPointZeroZero
): string => {
  let theNumber = numberOfBytes;
  // just because all storage in some of these ranges doesn't exist
  // today, does not mean we cannot reason about them.
  const knownUnits = [
    "Geopbyte", // ...
    "BB", // brontobyte
    "YB", // yottabyte
    "ZB", // zettabyte
    "EB", // exabytes
    "PB", // petabytes
    "TB", // terabytes
    "GB", // gigabytes
    "MB", // megabytes
    "KB", // kilobytes
    "B", // bytes
  ].reverse();

  let index = 0;
  while (theNumber >= kilo && index < knownUnits.length - 1) {
    theNumber = theNumber / kilo;
    index++;
  }

  return postProcess(numberOfBytes, knownUnits[index]);
};
