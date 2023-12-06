import { Console } from '@woowacourse/mission-utils';
import Validator from '../Validator/Validator';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync();
    Validator.numbers(input);
    return [...input].map(Number);
  },

  async readOption() {
    const input = await Console.readLineAsync();
    Validator.option(input);
    return Number(input);
  },
};

export default InputView;
