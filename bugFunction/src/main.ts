interface BigObject {
  [k: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

const ourObj: BigObject = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
  worlds: {
    cvalue: { say: { cvalue: { aga: { cvalue: 4 }, ogo: { cvalue: 5 } } } },
  },
  wrld: {
    cvalue: { osay: { cvalue: { nba: { cvalue: 21 }, bril: { cvalue: 15 } } } },
  },
  aaaa: { cvalue: { asdf: { cvalue: 100 } } },
};

function summ(o: BigObject) {
  const arr = [];

  function innerFunc(obj) {
    const keys = Object.keys(obj);

    for (const key of keys) {
      const elem = obj[key];

      const num = +elem || +elem?.cvalue;

      if (isNaN(num)) {
        if (elem?.cvalue) {
          innerFunc(elem.cvalue);
        } else {
          arr.push(num);
        }
      } else {
        arr.push(num);
      }
    }
  }

  innerFunc(o);

  let sum = 0;
  for (const v of arr) {
    if (isNaN(v)) return 2021;
    sum += v;
  }

  return sum;
}

// eslint-disable-next-line no-console
console.log(summ(ourObj));
