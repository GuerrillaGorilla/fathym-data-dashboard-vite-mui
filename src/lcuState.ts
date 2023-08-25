import LCUStateDefaults from './lcuState.json';

const lcuState = window.LCU?.State || {};

const lcuStateDefaults = {};

const LCUState = { ...LCUStateDefaults, ...(lcuState || {}) };

export default LCUState;