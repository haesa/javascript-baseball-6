import { Console } from '@woowacourse/mission-utils';
import Validator from '../Validator/Validator';

const InputView = {
  async readNumbers() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    Validator.numbers(input);
    return [...input].map(Number);
  },

  async readOption() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    Validator.option(input);
    return Number(input);
  },
};

export default InputView;
