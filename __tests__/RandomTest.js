import pickNumbers from '../src/Random';

describe('pickNumbers 함수 테스트', () => {
  test('서로 다른 임의의 수 3자리', () => {
    const numbers = pickNumbers();
    expect(numbers).toHaveLength(3);
    expect(new Set(numbers).size).toBe(3);
  });
});
