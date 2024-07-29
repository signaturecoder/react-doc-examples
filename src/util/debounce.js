// call, bind ,apply
export const debounce = (fn, delay = 3000) => {
  let intervalID;
  return (...args) => {
    clearInterval(intervalID);
    intervalID = setTimeout(() => fn.apply(this, args), delay);
  };
};
