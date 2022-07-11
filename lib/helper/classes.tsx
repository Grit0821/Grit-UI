const classes = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ')
}

export default classes

interface ClassToggles {
  [Key: string]: Boolean
}

const scopedClassMaker = (prefix: string) =>
  (name?: string | ClassToggles, options?: { extra?: string }) =>
    Object.entries(name instanceof Object ? name : { [name === undefined ? '' : name]: true })
      .filter(kv => kv[1] !== false)
      .map(kv => kv[0])
      .map(name => [prefix, name]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ')

export { scopedClassMaker }