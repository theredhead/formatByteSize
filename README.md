- [Purpose](#purpose)
  - [Installing](#installing)
  - [Simple usage](#simple-usage)
  - [Advanced usage](#advanced-usage)
    - [Function Declaration](#function-declaration)
      - [Parameters](#parameters)
    - [Using your own post processing](#using-your-own-post-processing)
    - [Built-in post processors](#built-in-post-processors)
      - [Using `alwaysTwoDecimals`](#using-alwaystwodecimals)

# Purpose

Providing human readable file sizes.

## Installing

`npm install @theredhead/formatbytesize`

## Simple usage

```typescript
import { formatByteSize } from '@theredhead/formatbytesize';

const bytes = 100; // or any number >= 0

// the simplest form
const result = formatByteSize(bytes) // result = "100B";
```

## Advanced usage

To keep things simple yet user extensible, there are several ways to customize the result
this funtion returns.

### Function Declaration

```typescript
export const formatByteSize = (
  numberOfBytes: number,
  options: FormatByteSizeOptions
): string {...
```

#### Parameters

- `numberOfBytes`: the number of bytes to format
- `options` expects an opject that conforms to to the FormatByteSizeOptions interfece,
  this currently has two options (both are optional):
  - `kilo`: either 1000 or 1024, defaulting to 1024
  - `postProcessor`: a function to post process the result, defaulting to `stripPointZeroZero`

### Using your own post processing

Sometimes there is this one edge-case that just requires a whole lot more code and introduces a bunch of new opportunities to get buggy. So, `formatByteSize` is open for
expansion by design. Most importantly, you can create and use PostProcessor functions

```typescript
const mySpecialPostProcessor: FormatByteSizePostProcessorFunc = (n, s) => {
    If (n < 1024 && s == 'B') {
        return 'Less than 1KB';
    }
    return [Math.floor(n), s].join('');
};

const result = formatByteSize(bytes, {
  postProcessor: mySpecialPostProcessor
}); // result = 'Less than 1KB';
```

### Built-in post processors

There are two built in `FormatByteSizePostProcessorFunc`s that you can use out of the box:

- `stripPointZeroZero` will return two decimals except when that would make the number end in ".00", in which case it just returns the whole number. This is the default.
- `alwaysTwoDecimals` will return two decimals.

#### Using `alwaysTwoDecimals`

```typescript
const bytes = 1024;

const resultA = formatByteSize(bytes, {
  postProcessor: alwaysTwoDecimals
}) // resultA = "1.00KB";

const resultB = formatByteSize(bytes) // resultB = "1KB";
```

Using 1000 as a base for kilo instead of 1024:

```typescript
const bytes = 1024;
// if you really need 1000byte megabytes
const result = formatByteSize(bytes, {kilo: 1000}) // result = "1.20KB";

```
