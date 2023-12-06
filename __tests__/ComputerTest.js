import Computer from '../src/Computer';

describe('Computer 클래스 테스트', () => {
  let computer;
  beforeEach(() => {
    computer = new Computer([1, 2, 3]);
  });

  test('스트라이크', () => {
    expect(computer.gameHint([1, 2, 3])).toEqual({
      strike: 3,
      ball: 0,
      nothing: false,
    });
  });

  test('볼', () => {
    expect(computer.gameHint([3, 5, 1])).toEqual({
      strike: 0,
      ball: 2,
      nothing: false,
    });
  });

  test('낫싱', () => {
    expect(computer.gameHint([7, 5, 9])).toEqual({
      strike: 0,
      ball: 0,
      nothing: true,
    });
  });
});
