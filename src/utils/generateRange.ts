export const generateRange = (
  n1: number,
  n2: number,
  inclusive: boolean = false
) => {
  if (n1 > n2) {
    return Array.from(
      { length: n1 - n2 },
      (_, i) => n2 - (inclusive ? i : i + 1)
    ).sort();
  } else
    return Array.from(
      { length: n2 - n1 },
      (_, i) => n1 + (inclusive ? i : i + 1)
    );
};
