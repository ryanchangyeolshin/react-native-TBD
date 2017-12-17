const validate = (value, rules) => {
  let isValid = true
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule])
        break
      case 'isNotEmpty':
        isValid = isValid && notEmptyValidator(value)
        break
      default:
        isValid = true
    }
  }
  return isValid
}

const minLengthValidator = (value, minimumReq) => {
  return value.length >= minimumReq
}

const notEmptyValidator = value => {
  return value.trim() !== ''
}

export default validate
