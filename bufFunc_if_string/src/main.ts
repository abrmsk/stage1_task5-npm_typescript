interface BigObject {
  [k: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

const ourObj: BigObject = {
  world: { cvalue: { yay: { cvalue: '1' } } },
  worlds: {
    cvalue: { say: { cvalue: { aga: { cvalue: '2' }, ogo: { cvalue: 3 } } } },
  },
  hello: { cvalue: 4 },
  wrld: {
    cvalue: { osay: { cvalue: { nba: { cvalue: 5 }, bril: { cvalue: 6 } } } },
  },
  aaaa: { cvalue: { asdf: { cvalue: '7' } } },
};

function summ(oObj: BigObject, defaultResult = 2021): number {
  function innerFunc(obj: BigObject): number {
    const res = Object.keys(obj).map((key) => {
      const elem = obj[key];
      if (elem === undefined) return undefined;
      if (elem.cvalue === undefined) return undefined;
      if (typeof elem.cvalue === 'number') return +elem.cvalue;
      if (typeof elem.cvalue === 'string') {
        // An empty string is parsed to 0. Let's fix that.
        return elem.cvalue === '' ? undefined : +elem.cvalue;
      }
      return innerFunc(elem.cvalue);
    });

    return res.reduce((total, elem) => total + elem, 0);
  }

  const result = innerFunc(oObj);
  return isNaN(result) ? defaultResult : result;
}

// eslint-disable-next-line no-console
console.log(summ(ourObj));
