const Validator = {
  numbers(input) {
    if (/^\d+$/.test(input)) {
      throw new Error('[ERROR] 서로 다른 3자리의 수를 입력하세요.');
    }
    if ([...input].some((value) => value === '0')) {
      throw new Error('[ERROR] 1과 9 사이의 숫자를 입력하세요.');
    }
    if ([...input].length !== 3) {
      throw new Error('[ERROR] 서로 다른 3자리의 수를 입력하세요.');
    }
    if (new Set(...input).size !== 3) {
      throw new Error('[ERROR] 서로 다른 3자리의 수를 입력하세요.');
    }
  },

  option(input) {
    if (input !== '1' && input !== '2') {
      throw new Error('[ERROR] 1(재시작) 또는 2(종료)를 입력하세요.');
    }
  },
};

export default Validator;
