/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import sayHello from './greet';
import { setThisTimer, startThisTimer } from './timer';

function showHello(divId: string, name: string): void {
  const elt = document.getElementById(divId);
  elt.innerText = sayHello(name);
}

showHello('greeting', 'Berdichev!');

/**
 * TIMER
 */
const timer = document.getElementById('show_timer');
const interval = 50; // ms

// Press 'Plus' button
document.getElementById('btn_plus').addEventListener('click', () => {
  timer.innerText = setThisTimer(timer.innerText, true);
});

// Press 'Minus' button
document.getElementById('btn_minus').addEventListener('click', () => {
  timer.innerText = setThisTimer(timer.innerText, false);
});

// Start Timer
document.getElementById('btn_start').addEventListener('click', (e) => {
  startThisTimer(
    timer,
    e.currentTarget,
    document.getElementById('timer_inscription'),
    'Осталось',
    interval,
    ['btn_plus', 'btn_minus']
  );
});
