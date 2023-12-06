import Validator from '../src/Validator/Validator';

describe('Validator 클래스 테스트', () => {
  test.each([['abc'], ['1234'], ['112']])(
    '숫자가 아닌 문자를 입력하면 예외가 발생한다. (input: %s)',
    input => {
      expect(() => {
        Validator.numbers(input);
      }).toThrow('[ERROR] 서로 다른 3자리의 수를 입력하세요.');
    }
  );
});
