export const expectedAction = <T>(type: string, payload?: T) => ({
  type,
  payload,
});
