/** @format */

export type FormatByteSizePostProcessorFunc = (
  num: number,
  unit: string
) => string;

export interface FormatByteSizeOptions {
  postProcessor?: FormatByteSizePostProcessorFunc;
  kilo?: 1000 | 1024;
}

export const stripPointZeroZero: FormatByteSizePostProcessorFunc = (
  num,
  unit
) => [num.toFixed(2).replace(/\.00$/, ""), unit].join("");

export const alwaysTwoDecimals: FormatByteSizePostProcessorFunc = (num, unit) =>
  [num.toFixed(2), unit].join("");

/**
 * Formats a given number of bytes in a human readable format
 */
export const formatByteSize = (
  numberOfBytes: number,
  options: FormatByteSizeOptions = {}
): string => {
  const defaultOptions = {
    kilo: 1024,
    postProcessor: stripPointZeroZero,
  };

  const theOptions = {
    kilo: options.kilo ?? defaultOptions.kilo,
    postProcessor: options.postProcessor ?? defaultOptions.postProcessor,
  };

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
  while (theNumber >= theOptions.kilo && index < knownUnits.length - 1) {
    theNumber = theNumber / theOptions.kilo;
    index++;
  }

  return theOptions.postProcessor(theNumber, knownUnits[index]);
};
