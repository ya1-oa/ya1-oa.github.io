import { start, step, result } from './simulation.mjs';

let state = start();
const stats = document.querySelector('#stats');
const outcome = document.querySelector('#outcome');
const log = document.querySelector('#log');
const buttons = document.querySelectorAll('[data-action]');

function render() {
  const turnsLeft = 5 - state.log.length;
  stats.textContent = `Turns left: ${turnsLeft} · Evidence: ${state.evidence}/4 · Oversight: ${state.oversight}/4 · Capacity: ${state.capacity}/5`;
  outcome.textContent = result(state);
  log.replaceChildren(...state.log.map(label => {
    const item = document.createElement('li');
    item.textContent = label;
    return item;
  }));
  for (const button of buttons) button.disabled = turnsLeft === 0;
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    state = step(state, button.dataset.action);
    render();
  });
}
document.querySelector('#restart').addEventListener('click', () => {
  state = start();
  render();
  buttons[0].focus();
});
render();
