export const validateInputs = (formData: FormData) => {
  const inputs = Object.fromEntries(formData)
  let sanitizedInputs = new Map()

  for (const key in inputs) {
    if (key.includes('$ACTION_')) {
      continue
    }

    const inputValue = sanitizeInput(inputs[key])

    if (!inputValue) {
      break
    }

    sanitizedInputs.set(key, inputValue)
  }

  return sanitizedInputs
}

const sanitizeInput = (value: FormDataEntryValue | null) => {
  if (!value) {
    return ''
  }

  return value.toString().replace(/[^\w\s]/gi, '')
}
