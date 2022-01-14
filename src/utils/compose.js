// делает удобным для чтения функции которые оборачиваются compose
const compose =
  (...funcs) =>
  (comp) => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
  };

export default compose;
