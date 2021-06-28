import React from 'react'
import { Row, TextMini, Col } from '..'
import { TextareaProps, BoxProps, Textarea } from '@chakra-ui/react'
import ErrorCollapse from './src/ErrorCollapse'
import { useFieldState } from '../hooks'
import { Text } from '@chakra-ui/layout'

interface TextareaFieldProps extends TextareaProps {
  name: string
  label?: string
  description?: string
  _container?: BoxProps
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  name,
  label,
  description,
  _container,
  ...rest
}) => {
  const [value, setValue, field] = useFieldState(name, '')

  return (
    <Col {..._container}>
      {label && (
        <Text fontSize='sm' userSelect='none' fontWeight='bold' mb={1}>
          {label}
        </Text>
      )}
      <Row>
        <Textarea
          focusBorderColor='primary.400'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rounded='sm'
          bg='gray.600'
          _focus={{ bg: 'white', color: 'gray.800' }}
          {...rest}
        />
        <ErrorCollapse {...field} />
      </Row>
      {description && (
        <TextMini userSelect='none' color='GrayText'>
          {description}
        </TextMini>
      )}
    </Col>
  )
}

export default TextareaField
