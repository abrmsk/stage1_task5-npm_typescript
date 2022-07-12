interface BigObject {
  [k: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

const ourObj: BigObject = {
  world: { cvalue: { yay: { cvalue: '2' } } },
  worlds: {
    cvalue: { say: { cvalue: { aga: { cvalue: 4 }, ogo: { cvalue: 5 } } } },
  },
  hello: { cvalue: 1 },
  wrld: {
    cvalue: { osay: { cvalue: { nba: { cvalue: 21 }, bril: { cvalue: 15 } } } },
  },
  aaaa: { cvalue: { asdf: { cvalue: 100 } } },
};

function summ(obj: BigObject, defaultResult = 2021) {
  function innerFunc(o) {
    const arr = Object.keys(o).map((key) => {
      const elem = o[key];
      const num = +elem || +elem?.cvalue;

      if (isNaN(num)) {
        if (elem?.cvalue) return innerFunc(elem.cvalue);
        return num;
      }

      return num;
    });

    return arr.reduce((total, elem) => (elem !== null ? total + elem : 0), 0);
  }

  const res = innerFunc(obj);
  return isNaN(res) ? defaultResult : res;
}

// eslint-disable-next-line no-console
console.log(summ(ourObj));
