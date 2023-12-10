import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants';

const OutputView = {
  printStart: () => Console.print(OUTPUT.startMessage),
  printHint: ({ strike, ball, nothing }) => {
    if (nothing) {
      Console.print(OUTPUT.nothing);
      return;
    }

    Console.print(OUTPUT.ballStrike(ball, strike));
  },
  printClear: () => Console.print(OUTPUT.clearMessage),
};

export default OutputView;
