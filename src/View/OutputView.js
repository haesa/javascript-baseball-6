import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStart: () => Console.print('숫자 야구 게임을 시작합니다.'),
  printHint: ({ strike, ball, nothing }) => {
    if (nothing) {
      Console.print('낫싱');
      return;
    }

    Console.print(
      `${ball > 0 ? `${ball}볼 ` : ''}${
        strike > 0 ? `${strike}스트라이크` : ''
      }`
    );
  },
  printClear: () => Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료'),
};

export default OutputView;
