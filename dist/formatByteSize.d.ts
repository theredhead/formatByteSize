export declare type FormatByteSizePostProcessorFunc = (num: number, unit: string) => string;
export declare const stripPointZeroZero: FormatByteSizePostProcessorFunc;
export declare const alwaysTwoDecimals: FormatByteSizePostProcessorFunc;
export declare const formatByteSize: (numberOfBytes: number, kilo?: 1000 | 1024, postProcess?: FormatByteSizePostProcessorFunc) => string;
