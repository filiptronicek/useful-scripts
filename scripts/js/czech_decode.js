const what = [
    "ě","š","č","ř","ž","ý","á","í","ň","ó","ů","ú"
];
const withWhat = [
    "e","s","c","r","z","y","a","i","n","o","u","u"
];
function replaceUni(title) {
    function replaceMulti(stringFrom, needle, replacement)
    {
        let rplcStr = "";
        rplcStr = stringFrom.split(needle).join(replacement);
        rplcStr = stringFrom.split(needle.toUpperCase()).join(replacement.toUpperCase());
        return rplcStr;
    }
    let i = 0; 
    let fnl = title;
    for(let w of what) {
        fnl = replaceMulti(fnl, w, withWhat[i++]);
    }
    return fnl;
}