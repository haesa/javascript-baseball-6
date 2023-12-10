import Validator from '../src/Validator/Validator';

describe('Validator 클래스 테스트', () => {
  test.each([['abc'], ['1234'], ['112']])(
    '숫자가 아닌 문자를 입력하면 예외가 발생한다. (input: %s)',
    (input) => {
      expect(() => {
        Validator.numbers(input);
      }).toThrow('[ERROR] 서로 다른 3자리의 수를 입력하세요.');
    }
  );

  test('숫자에 0이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      Validator.numbers('501');
    }).toThrow('[ERROR] 1과 9 사이의 숫자를 입력하세요.');
  });

  test('옵션으로 1 또는 2가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      Validator.option('a');
    }).toThrow('[ERROR] 1(재시작) 또는 2(종료)를 입력하세요.');
  });
});
