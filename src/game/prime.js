import getRandomNum from '../getRandomNumber.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getTasksAndAnswers = () => {
  const taskAndAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const task = getRandomNum(120, 1);
    const answer = isPrime(task) ? 'yes' : 'no';
    taskAndAnswer.push(task);
    taskAndAnswer.push(answer);
  }
  return taskAndAnswer;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  playGame(rules, getTasksAndAnswers());
};
