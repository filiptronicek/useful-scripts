import { normalizeConversions } from "./normalize_list";

function norm(pStr:string): string{
    normalizeConversions.forEach(function(normalizeEntry){
        pStr = pStr.replace(normalizeEntry.regex, normalizeEntry.clean);
    });
    return pStr;
};
console.log(norm("lmaoč"))