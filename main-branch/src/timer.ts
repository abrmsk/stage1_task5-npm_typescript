import * as moment from '../node_modules/moment/moment';

export function setThisTimer(timerText: string, add: boolean): string {
  let num = Number(timerText);

  // @ts-ignore
  if (Number.isNaN(num)) {
    num = 0;
  }

  if (!add && num === 0) {
    return '0';
  }

  return `${add ? num + 1 : num - 1}`;
}

export function startThisTimer(
  timer: HTMLElement,
  button: any,
  timerInscription: HTMLElement,
  timeRunsText: string,
  interval: number,
  btnsId: string[]
): void {
  const d = +timer.innerText;
  const t = timer;
  // @ts-ignore
  if (Number.isNaN(d) || d === 0) {
    // @ts-ignore
    if (Number.isNaN(d)) {
      t.innerText = '0';
    }
    return;
  }
  const b = button;
  b.style.display = 'none';
  document.getElementById(btnsId[0]).style.display = 'none';
  document.getElementById(btnsId[1]).style.display = 'none';
  const textOld = timerInscription.innerText;
  const ti = timerInscription;
  ti.innerText = timeRunsText;

  let date = moment(new Date(d)).add(d, 'minutes');
  let sint; // set interval id

  /* eslint-disable no-shadow */
  const setThisTimer = () => {
    date = date.add(-1, 'seconds');

    if (
      Number(date.get('minutes')) === 0 &&
      Number(date.get('seconds')) === 0
    ) {
      // eslint-disable-next-line no-param-reassign
      t.innerText = '0';
      window.clearInterval(sint);
      sint = null;
      b.style.display = 'inline';
      document.getElementById(btnsId[0]).style.display = 'block';
      document.getElementById(btnsId[1]).style.display = 'block';
      ti.innerText = textOld;
    } else {
      t.innerText = `${date.get('minutes')} : ${date.get('seconds')}`;
    }
  };

  sint = setInterval(setThisTimer, interval);
}
