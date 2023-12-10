const OUTPUT = {
  startMessage: '숫자 야구 게임을 시작합니다.',
  nothing: '낫싱',
  ballStrike: (ball, strike) =>
    `${ball > 0 ? `${ball}볼 ` : ''}${strike > 0 ? `${strike}스트라이크` : ''}`,
  clearMessage: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

export default OUTPUT;
