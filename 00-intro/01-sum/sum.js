/**
 * Вычислить сумму двух чисел
 *
 * @param {number} a - первое число
 * @param {number} b - второе целое
 * @return {number} сумма чисел a и b
 */
export function sum(a, b) {
  // Решение
  a = a ? +a : 0
  b = b ? +b : 0
  return a + b
}
