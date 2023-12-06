class Computer {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  #contains(number) {
    return this.#numbers.includes(number);
  }

  #commonNumberCount(numbers) {
    return numbers.filter(number => this.#contains(number)).length;
  }

  gameHint(numbers) {
    return {
      strike: this.#strike(numbers),
      ball: this.#ball(numbers),
      nothing: this.#nothing(numbers),
    };
  }

  #strike(numbers) {
    return numbers.filter((number, index) => number === this.#numbers[index])
      .length;
  }

  #ball(numbers) {
    return this.#commonNumberCount(numbers) - this.#strike(numbers);
  }

  #nothing(numbers) {
    return this.#commonNumberCount(numbers) === 0;
  }
}

export default Computer;
