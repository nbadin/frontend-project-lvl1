import generateNumber from '../utils/generateNumber.js';
import runGame, { roundCount } from '../index.js';

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
  const minNumber = 1;
  const maxNumber = 120;
  const task = String(generateNumber(minNumber, maxNumber));
  const answer = isPrime(task) ? 'yes' : 'no';
  const questionAndAnswerForOneRound = [task, answer];

  return questionAndAnswerForOneRound;
};

export default () => {
  const tasksAndAnswers = [];
  for (let i = 0; i < roundCount; i += 1) {
    tasksAndAnswers.push(getTasksAndAnswers());
  }

  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(rules, tasksAndAnswers);
};
