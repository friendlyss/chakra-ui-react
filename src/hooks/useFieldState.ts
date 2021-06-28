import { useField } from '@unform/core'
import { useState, useEffect } from 'react'

interface useFieldStateOptions {
  onSetValue?: (value: any) => void
}

export function useFieldState<T>(
  name: string,
  initialValue?: T,
  options?: useFieldStateOptions
) {
  const field = useField(name)
  const [value, setValue] = useState<T>(initialValue as any)

  useEffect(() => {
    field.registerField({
      name: field.fieldName,
      getValue: () => value,
      setValue: (_, value) => {
        setValue(value)
        if (value) {
          options?.onSetValue?.(value)
        }
      }
    })
  }, [field.registerField, field.fieldName, value])

  return [value, setValue, field] as [
    T,
    React.Dispatch<React.SetStateAction<T>>,
    ReturnType<typeof useField>
  ]
}
