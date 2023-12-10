const VALIDATOR = {
  invalidNumbers: (input) => !/^\d+$/.test(input),
  invalidNumberRange: (input) => [...input].some((value) => value === '0'),
  invalidNumberLength: (input) => [...input].length !== 3,
  invalidNumberUnique: (input) => new Set([...input]).size !== 3,
  invalidOption: (input) => input !== '1' && input !== '2',
};

export default VALIDATOR;
