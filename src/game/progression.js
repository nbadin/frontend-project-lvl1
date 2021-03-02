import getRandomNum from '../getRandomNumber.js';
import playGame from '../index.js';

const getRandomProgression = () => {
  const progressionSize = getRandomNum(15, 5);
  const firstNumber = getRandomNum(10, 0);
  const step = getRandomNum(10, 1);
  const result = [];
  for (let i = 0; i < progressionSize; i += 1) {
    result.push(firstNumber + (step * i));
  }
  return result;
};

const getTasksAndAnswers = () => {
  const taskAndAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const progression = getRandomProgression();
    const indexOfMissedNum = getRandomNum(0, progression.length - 1);
    const answer = String(progression[indexOfMissedNum]);
    progression[indexOfMissedNum] = '..';
    const task = progression.join(' ');
    taskAndAnswer.push(task);
    taskAndAnswer.push(answer);
  }
  return taskAndAnswer;
};

export default () => {
  const rules = 'What number is missing in the progression?';
  playGame(rules, getTasksAndAnswers());
};
