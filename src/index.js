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
export const makeCart = () => {
  const result = [];
  const addItem = (good, count = 1) => {
    if (count <= 0) return "Please enter the correct quantity of goods!";
    const existingEl = result.find((el) => el.good.name === good.name);
    if (!existingEl) {
      result.push({ good, count });
    } else {
      existingEl.count += count;
    }
  };
  const getItems = () => {
    return result;
  };
  const getCost = () => {
    return result.reduce((acc, el) => acc + el.good.price * el.count, 0);
  };
  const getCount = () => {
    return result.reduce((acc, el) => acc + el.count, 0);
  };
  return { addItem, getItems, getCost, getCount };
};
/*-----------------------------------------------------*/
export const getLodash = (arr, index, defaultValue = null) => {
  if (!Array.isArray(arr)) return null;
  // Нормализация данных, для отрицательных аргументов
  if (index < 0) index += arr.length;
  // Ограничиваем индексы, чтобы они не были меньше нуля и не превышали длину массива
  index = Math.max(0, index);
  index = Math.min(arr.length, index);
  if (index >= 0 && index < arr.length) return arr[index];
  return defaultValue;
};
/*-----------------------------------------------------*/
export const indexOfLodash = (arr, value, fromIndex = 0) => {
  if (!Array.isArray(arr)) return -1;
  if (fromIndex < 0) fromIndex += arr.length;
  fromIndex = Math.max(0, fromIndex);
  fromIndex = Math.min(arr.length, fromIndex);
  for (let i = fromIndex; i < arr.length; i += 1) {
    if (arr[i] === value) return i;
  }
  return -1;
};
/*-----------------------------------------------------*/
export const sliceLodash = (arr, begin = 0, end = arr.length) => {
  if (!Array.isArray(arr)) return null;
  // Нормализуем значения begin и end. Алгоритм работы прост: если значение отрицательное, то прибавляем к нему длину массива, чтобы преобразовать в положительный индекс. При нормализации важно ограничивать значения длиной массива, чтобы избежать выхода за границы. Это гарантирует, что индексы остаются валидными, даже если они выходят за пределы массива.
  if (begin < 0) begin += arr.length;
  if (end < 0) end += arr.length;
  // Ограничиваем индексы
  begin = Math.max(0, begin); // Минимум 0
  end = Math.min(arr.length, end); // Не больше длины массива
  const result = [];
  for (let i = begin; i < end; i += 1) {
    result.push(arr[i]);
  }
  return result;
};
/*-----------------------------------------------------*/
export const fill = (coll, value, start = 0, end = coll.length) => {
  if (!Array.isArray(coll)) return null;
  if (start < 0) start += coll.length;
  if (end < 0) end += coll.length;
  start = Math.max(0, start);
  end = Math.min(coll.length, end);
  for (let i = start; i < end; i += 1) {
    coll[i] = value;
  }
  return coll;
};
/*-----------------------------------------------------*/