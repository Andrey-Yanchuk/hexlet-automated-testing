// src/index.js
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
export const capitalize = (text) => {
    if (text === null || text === undefined || text === '') return '';
    const [firstChar, ...restSubstring] = text;
    return `${firstChar.toUpperCase()}${restSubstring.join('')}`;
};
/*-----------------------------------------------------*/
export const get = (obj, key, defaultValue) => {
    // if (Object.keys(obj).length === 0) return defaultValue;
    // const result = Object.entries(obj).map(([objKey, objValue]) => {
    //     if (objKey === key) return objValue;
    //     return undefined;
    // });
    // return result !== undefined ? result : defaultValue; // вернет массив со строкой, а не саму строку, второй вариант решение более правильный и лаконичнее
    if (Object.keys(obj).includes(key)) return obj[key];
    return defaultValue;
};
/*-----------------------------------------------------*/