import React from 'react'
import { useFieldState } from '../hooks'
import { Row, TextMini, SquareCheck } from '..'

interface BooleanFieldProps {
  name: string
  label?: string
  defaultValue?: boolean
}

const BooleanField: React.FC<BooleanFieldProps> = ({
  name,
  label,
  defaultValue = false
}) => {
  const [value, setValue] = useFieldState(name, defaultValue)

  return (
    <Row
      cursor='pointer'
      userSelect='none'
      alignItems='center'
      onClick={() => setValue(() => !value)}
    >
      <SquareCheck size={10} isChecked={value} />
      <TextMini pl={4}>{label}</TextMini>
    </Row>
  )
}

export default BooleanField
