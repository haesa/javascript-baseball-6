import { ERROR } from '../src/constants';
import Validator from '../src/Validator/Validator';

describe('Validator 클래스 테스트', () => {
  test.each([['abc'], ['1234'], ['112']])(
    '숫자가 아닌 문자를 입력하면 예외가 발생한다. (input: %s)',
    (input) => {
      expect(() => {
        Validator.numbers(input);
      }).toThrow(ERROR.distinct3DigitNumbers);
    }
  );

  test('숫자에 0이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.numbers('501');
    }).toThrow(ERROR.baseballNumberRange);
  });

  test('옵션으로 1 또는 2가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      Validator.option('a');
    }).toThrow(ERROR.option);
  });
});
