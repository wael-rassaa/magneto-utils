/**
 * Converts an array of objects into an array of values corresponding to the specified key.
 *
 * @param arr array to pluck
 * @param key corresponds to a key that exists in the array
 * @returns {Array} an array of values corresponding to the specified key
 */
export function pluck<T>(arr: Array<T>, key: string | number): T[keyof T][] {
  return arr.map((i) => i[key as keyof T]);
}
