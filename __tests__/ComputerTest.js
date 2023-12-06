import Computer from '../src/Computer';

describe('Computer 클래스 테스트', () => {
  let computer;
  beforeEach(() => {
    computer = new Computer([1, 2, 3]);
  });

  test('스트라이크', () => {
    expect(computer.strike([1, 2, 3])).toBe(3);
    expect(computer.strike([1, 5, 6])).toBe(1);
    expect(computer.strike([1, 5, 3])).toBe(2);
    expect(computer.strike([7, 5, 9])).toBe(0);
  });

  test('볼', () => {
    expect(computer.ball([3, 1, 2])).toBe(3);
    expect(computer.ball([3, 5, 1])).toBe(2);
    expect(computer.ball([7, 5, 1])).toBe(1);
    expect(computer.ball([7, 5, 9])).toBe(0);
  });

  test('낫싱', () => {
    expect(computer.nothing([1, 2, 3])).toBe(false);
    expect(computer.nothing([7, 5, 9])).toBe(true);
  });
});
