import getRandomNum from '../getRandomNumber.js';
import playGame from '../index.js';

const mathOperation = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};

const getTasksAndAnswers = () => {
  const mathOperations = ['+', '-', '*'];
  const taskAndAnswer = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum(10, 1);
    const task = `${firstNum} ${mathOperations[i]} ${secondNum}`;
    const answer = String(mathOperation(firstNum, secondNum, mathOperations[i]));
    taskAndAnswer.push(task);
    taskAndAnswer.push(answer);
  }
  return taskAndAnswer;
};

export default () => {
  const rules = 'What is the result of the expression?';
  playGame(rules, getTasksAndAnswers());
};
