export const findOptionLabel = (value: number) => {
  if (value === 0) {
    return "Rock";
  }
  if (value === 1) {
    return "Paper";
  }
  if (value === 2) {
    return "Scissors";
  }
};
