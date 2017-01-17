export const refChanged = (text) => {
  return {
    type: 'ref_changed',
    payload: text
  };
};
