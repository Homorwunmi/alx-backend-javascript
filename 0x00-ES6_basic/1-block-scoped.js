export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const tasknew = true;
    const task2new = false;
    return [tasknew, task2new];
  }

  return [task, task2];
}
