export const handleDecimalParser = (number) =>{
    let input = number.replace(/\D/g, '');
    return (input / 100).toFixed(2).replace('.', ',');
}