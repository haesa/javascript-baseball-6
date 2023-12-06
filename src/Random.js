import { Random } from '@woowacourse/mission-utils';

function pickNumbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }

  return numbers;
}

export default pickNumbers;
