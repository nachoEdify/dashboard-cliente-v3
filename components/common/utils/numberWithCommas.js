export const numberWithCommas = (x) =>{
    return x?.toString().replace(/.(?=(?:.{3})+$)/g, '$&.')?.replace('..', ',')
}