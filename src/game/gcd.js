import getRandomNum from '../getRandomNumber.js';
import playGame from '../index.js';

const gcd = (firstnum, secondNum) => {
  let divider = secondNum;
  while (divider > 0) {
    if (firstnum % divider === 0 && secondNum % divider === 0) {
      return divider;
    }
    divider -= 1;
  }
  return divider;
};

const getTasksAndAnswers = () => {
  const taskAndAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum(50);
    const secondNum = getRandomNum(50);
    const task = `${firstNum} ${secondNum}`;
    const answer = String(gcd(firstNum, secondNum));
    taskAndAnswer.push(task);
    taskAndAnswer.push(answer);
  }
  return taskAndAnswer;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  playGame(rules, getTasksAndAnswers());
};
