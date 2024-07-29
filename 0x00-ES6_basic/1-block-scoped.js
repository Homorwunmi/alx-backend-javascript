export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const iftask = true;
    const iftask2 = false;
    return [iftask, iftask2];
  }

  return [task, task2];
}
