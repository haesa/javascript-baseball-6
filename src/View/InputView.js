import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants';
import Validator from '../Validator/Validator';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync(INPUT.number);
    Validator.numbers(input);
    return [...input].map(Number);
  },

  async readOption() {
    const input = await Console.readLineAsync(INPUT.option);
    Validator.option(input);
    return Number(input);
  },
};

export default InputView;
