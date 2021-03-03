"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatByteSize = exports.alwaysTwoDecimals = exports.stripPointZeroZero = void 0;
var stripPointZeroZero = function (num, unit) { return [num.toFixed(2).replace(/\.00$/, ""), unit].join(); };
exports.stripPointZeroZero = stripPointZeroZero;
var alwaysTwoDecimals = function (num, unit) {
    return [num.toFixed(2), unit].join();
};
exports.alwaysTwoDecimals = alwaysTwoDecimals;
var formatByteSize = function (numberOfBytes, kilo, postProcess) {
    if (kilo === void 0) { kilo = 1024; }
    if (postProcess === void 0) { postProcess = exports.stripPointZeroZero; }
    var theNumber = numberOfBytes;
    var knownUnits = [
        "Geopbyte",
        "BB",
        "YB",
        "ZB",
        "EB",
        "PB",
        "TB",
        "GB",
        "MB",
        "KB",
        "B",
    ].reverse();
    var index = 0;
    while (theNumber >= kilo && index < knownUnits.length - 1) {
        theNumber = theNumber / kilo;
        index++;
    }
    return postProcess(numberOfBytes, knownUnits[index]);
};
exports.formatByteSize = formatByteSize;
//# sourceMappingURL=formatByteSize.js.map