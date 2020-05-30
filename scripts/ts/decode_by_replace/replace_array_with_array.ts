function replaceUni(title:string) {
    function replaceMulti(stringFrom:string, needle:string, replacement:string)
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