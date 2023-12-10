import { GAME } from './constants';
import Computer from './Computer';
import InputView from './View/InputView';
import OutputView from './View/OutputView';
import pickNumber from './Random';

class App {
  #computer;

  async play() {
    OutputView.printStart();
    this.#computer = new Computer(pickNumber());
    await this.#repeatRound();
    OutputView.printClear();
    await this.#choiceOption();
  }

  async #repeatRound() {
    const numbers = await InputView.readNumbers();
    const hint = this.#computer.gameHint(numbers);
    OutputView.printHint(hint);

    if (GAME.notClear(hint.strike)) {
      await this.#repeatRound();
    }
  }

  async #choiceOption() {
    const option = await InputView.readOption();

    if (GAME.replay(option)) {
      this.#replay();
    }
  }

  #replay() {
    this.play();
  }
}

export default App;
