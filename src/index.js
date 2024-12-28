// src/index.js
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
export const capitalize = (text) => {
  if (text === null || text === undefined || text === "") return "";
  const [firstChar, ...restSubstring] = text;
  return `${firstChar.toUpperCase()}${restSubstring.join("")}`;
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
export const take = (items, n = 1) => items.slice(0, n);
/*-----------------------------------------------------*/
export const indexOf = (items, value, fromIndex = 0) => {
  // for (let i = fromIndex; i < items.length; i += 1) {
  //   const el = items[i];
  //   if (el === value) return i;
  // }
  // return -1; // Мой вариант решения, для понимания алгоритма
  return items.indexOf(value, fromIndex);
};
/*-----------------------------------------------------*/
export const reverse = (str) => {
  if (!str.length || str === "") return "";
  return str.split("").reverse().join("");
};
/*-----------------------------------------------------*/
export const without = (coll, ...values) => {
  if (coll.length === 0 || coll === 0) return [];
  return coll.filter((el) => !values.includes(el));
};
/*-----------------------------------------------------*/
export const gt = (value, other) => {
  if (value > other) return true;
  return false;
};
/*-----------------------------------------------------*/
export const makeValidator = () => {
  const checks = [];
  const addCheck = (fn) => {
    checks.push(fn);
  };
  const isValid = (value) => {
    if (checks.length === 0) return true;
    for (const check of checks) {
      if (!check(value)) return false;
    }
    return true;
    // return checks.every((check) => check(value));
  };
  return { addCheck, isValid };
};
/*-----------------------------------------------------*/
// Код написан ChatGPT
export const set = (obj, path, value) => {
  if (!path || path.length === 0) return obj;
  // Если путь передан как строка, разбиваем его на массив
  const pathArray = Array.isArray(path)
    ? path
    : path.split(/[.[\]']/).filter(Boolean);
  let current = obj;
  // Проходим по пути
  pathArray.forEach((key, index) => {
    // Если мы дошли до последнего элемента, то устанавливаем значение
    if (index === pathArray.length - 1) {
      current[key] = value;
    } else {
      // Если на текущем уровне объекта нет нужного ключа, создаем его(если это массив, то создаем пустой массив)
      if (!(key in current)) {
        current[key] = isNaN(pathArray[index + 1]) ? {} : [];
      }
      current = current[key];
    }
  });
  return obj;
};
/*-----------------------------------------------------*/
