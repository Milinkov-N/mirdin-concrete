export default function classNames(
  inital: string,
  secondary: string | string[],
  bools?: { [key: string]: boolean }
) {
  const classNames = [inital]

  secondary instanceof Array
    ? classNames.push(
        secondary.reduce((prev, val) => (val.length ? `${prev} ${val}` : prev))
      )
    : classNames.push(secondary)

  Object.entries(bools || {}).forEach(([key, value]) => {
    if (value) {
      classNames.push(key)
      return
    }

    const isExist = classNames.find(el => el === key)

    if (isExist) {
      classNames.filter(el => el !== isExist)
    }
  })

  return classNames.join(' ').trim()
}
