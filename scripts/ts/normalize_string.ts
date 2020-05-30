function norm(from_trans:string) {
    const string_norm:string = from_trans.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log(string_norm);
    console.log(from_trans)
    return string_norm;
}