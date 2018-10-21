function createTypesAndActions(namespace, actionTypes) {
  const types = actionTypes.reduce((typeDict, type) => {
    typeDict[type] = `${namespace}/${type}`;
    return typeDict;
  }, {});
  const actions = actionTypes.reduce((actionDict, type) => {
    actionDict[type] = payload => ({ type: types[type], payload });
    return actionDict;
  }, {});
  return { types, actions };
}

function createAsyncTypesAndActions(namespace, types, options = { phases: [ 'request', 'success', 'failure' ] }) {
  const { phases } = options;
  return types.reduce((dict, type) => {
    const { types, actions } = dict;
    types[type] = phases.reduce((phaseDict, phase) => {
      phaseDict[phase] = `${namespace}/${type}_${phase.toUpperCase()}`;
      return phaseDict;
    }, {});
    actions[type] = phases.reduce((phaseDict, phase) => {
      phaseDict[phase] = payload => ({ type: types[type][phase], payload });
      return phaseDict;
    }, {});
    return { types, actions };
  }, { types: {}, actions: {} });
}

module.exports = { createTypesAndActions, createAsyncTypesAndActions };
