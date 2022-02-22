export function randArray(len, min, max) {
  return Array(len)
    .fill(1)
    .map((v) => Math.floor(Math.random() * (max - min) * 100) / 100);
}
