"use strict";
exports.__esModule = true;
var normalize_list_1 = require("../normalize_list");
function norm(pStr) {
    normalize_list_1.normalizeConversions.forEach(function (normalizeEntry) {
        pStr = pStr.replace(normalizeEntry.regex, normalizeEntry.clean);
    });
    return pStr;
}
;
console.log(norm("lmaoč"));
