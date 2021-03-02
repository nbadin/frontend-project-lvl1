import getRandomNum from '../getRandomNumber.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const getTasksAndAnswers = () => {
  const taskAndAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const task = getRandomNum(99, 1);
    const answer = isEven(task) ? 'yes' : 'no';
    taskAndAnswer.push(task);
    taskAndAnswer.push(answer);
  }
  return taskAndAnswer;
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  playGame(rules, getTasksAndAnswers());
};
