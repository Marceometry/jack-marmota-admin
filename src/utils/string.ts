export const templateReplace = (
  item: object,
  index: number,
  template: string,
) => {
  return Object.entries(item)
    .reduce((acc, [key, value]) => {
      return acc.replaceAll(`{${key}}`, value)
    }, template)
    .replaceAll('{index}', String(index + 1))
}
