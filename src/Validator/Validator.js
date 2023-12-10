import { ERROR, VALIDATOR } from '../constants/index';

const Validator = {
  numbers(input) {
    if (VALIDATOR.invalidNumbers(input)) {
      throw new Error(ERROR.distinct3DigitNumbers);
    }

    if (VALIDATOR.invalidNumberRange(input)) {
      throw new Error(ERROR.baseballNumberRange);
    }

    if (VALIDATOR.invalidNumberLength(input)) {
      throw new Error(ERROR.distinct3DigitNumbers);
    }

    if (VALIDATOR.invalidNumberUnique(input)) {
      throw new Error(ERROR.distinct3DigitNumbers);
    }
  },

  option(input) {
    if (VALIDATOR.invalidOption(input)) {
      throw new Error(ERROR.option);
    }
  },
};

export default Validator;
