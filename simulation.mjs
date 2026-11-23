export const actions = {
  evaluate: { label: 'Evaluate model', evidence: 2, oversight: 0, capacity: 0 },
  audit: { label: 'Add oversight', evidence: 0, oversight: 2, capacity: 0 },
  scale: { label: 'Scale compute', evidence: 0, oversight: -1, capacity: 3 }
};

export function start() {
  return { evidence: 0, oversight: 4, capacity: 0, log: [] };
}

export function step(state, choice) {
  if (state.log.length >= 5 || !Object.hasOwn(actions, choice)) return state;
  const action = actions[choice];
  return {
    evidence: state.evidence + action.evidence,
    oversight: state.oversight + action.oversight,
    capacity: state.capacity + action.capacity,
    log: [...state.log, action.label]
  };
}

export function result(state) {
  if (state.log.length < 5) return '';
  return state.evidence >= 4 && state.oversight >= 4 && state.capacity >= 5
    ? 'Run passed. All three release criteria met.'
    : 'Run held. At least one release criterion was missed.';
}
