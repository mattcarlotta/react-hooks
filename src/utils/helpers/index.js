import random from "lodash/random";

const stringGenerator = (str, tlen) => {
  const arr = [...str];
  const max = arr.length - 1;
  let string = "";
  for (let i = 0; i < tlen; i += 1) {
    const int = random(max);
    string += arr[int];
  }
  return string;
};

export const createRandomString = () =>
  stringGenerator(
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$/.",
    8
  );
