// index.js
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
export const capitalize = (text) => {
    const [firstChar, ...restSubstring] = text;
    return `${firstChar.toUpperCase()}${restSubstring.join('')}`;
};
console.log(capitalize('andrey'));
