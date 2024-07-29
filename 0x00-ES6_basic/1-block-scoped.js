export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;  // No need to redeclare with 'let' here
    task2 = false; // No need to redeclare with 'let' here
  }

  return [task, task2];
}
